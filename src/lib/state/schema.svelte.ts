import { createContext } from "svelte";

export type SchemaMap = Record<string, Array<string>>;

// Common SQL reserved words that would parse incorrectly when the
// schema browser inserts an unquoted `local.<name>` reference. The
// list is small on purpose — uncommon edge cases can be solved by
// the user wrapping the identifier in double quotes.
const RESERVED_WORDS = new Set([
  "select",
  "from",
  "where",
  "group",
  "order",
  "having",
  "limit",
  "offset",
  "join",
  "on",
  "as",
  "and",
  "or",
  "not",
  "in",
  "is",
  "null",
  "true",
  "false",
  "case",
  "when",
  "then",
  "else",
  "end",
  "union",
  "with",
  "table",
  "view",
  "by",
  "asc",
  "desc",
]);

const sanitizeIdentifier = (raw: string): string => {
  const stripped = raw.replace(/\.[^.]+$/, "").toLowerCase();
  const cleaned = stripped.replace(/[^a-z0-9_]/g, "_");
  const collapsed = cleaned.replace(/^_+/, "") || "file";
  // Suffix reserved words so the bare-identifier form parses in
  // user-typed queries (e.g. `select.csv` -> `select_t`).
  return RESERVED_WORDS.has(collapsed) ? `${collapsed}_t` : collapsed;
};

export class SchemaState {
  // Plain object held in $state. SchemaBrowser and the SQL extension
  // both read from `tables` getter; addTable/removeTable mutate via
  // re-assignment to keep reactivity simple.
  tables: SchemaMap = $state({});
  // Monotonic version counter — consumers that don't need the
  // contents but want to react to changes (e.g. the CodeMirror
  // Compartment reconfigure) can depend on this instead of
  // stringifying the whole map.
  version: number = $state(0);

  constructor(initial: SchemaMap = {}) {
    this.tables = { ...initial };
  }

  /**
   * Pick a unique table name derived from a filename. Lower-cased,
   * non-alphanumerics replaced with underscore. Collisions get a
   * numeric suffix so caller can register multiple files with the
   * same base name without clobbering.
   */
  uniqueTableName(filename: string): string {
    const base = sanitizeIdentifier(filename);
    const key = (n: string) => `local.${n}`;
    if (!(key(base) in this.tables)) return base;
    let i = 2;
    while (key(`${base}_${i}`) in this.tables) i += 1;
    return `${base}_${i}`;
  }

  addTable(qualified: string, columns: Array<string>): void {
    this.tables = { ...this.tables, [qualified]: columns };
    this.version += 1;
  }

  removeTable(qualified: string): void {
    if (!(qualified in this.tables)) return;
    const next = { ...this.tables };
    delete next[qualified];
    this.tables = next;
    this.version += 1;
  }

  /**
   * Schemas grouped for the sidebar tree, sorted by schema then table.
   * Returns plain arrays (not Map) so consumers don't pull in
   * SvelteMap reactivity machinery for a derived computation.
   */
  get bySchema(): Array<[string, Array<[string, Array<string>]>]> {
    const grouped: Record<string, Array<[string, Array<string>]>> = {};
    for (const [qualified, cols] of Object.entries(this.tables)) {
      const dot = qualified.indexOf(".");
      const schemaName = dot === -1 ? "main" : qualified.slice(0, dot);
      const table = dot === -1 ? qualified : qualified.slice(dot + 1);
      if (!grouped[schemaName]) grouped[schemaName] = [];
      grouped[schemaName].push([table, cols]);
    }
    return Object.entries(grouped)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([schemaName, entries]) => [
        schemaName,
        entries.sort(([a], [b]) => a.localeCompare(b)),
      ]);
  }
}

export const [getSchemaState, setSchemaState] = createContext<SchemaState>();
