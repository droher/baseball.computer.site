<script lang="ts">
  import { getDbState } from "$lib/state/db.svelte";
  import { getSchemaState } from "$lib/state/schema.svelte";
  import { friendlyQueryError } from "$lib/util/error-message";
  import { track } from "$lib/telemetry";

  type Registered = {
    filename: string;
    tableName: string;
    qualified: string; // "local.<table>"
  };

  const dbState = getDbState();
  const schemaState = getSchemaState();

  let files: Registered[] = $state([]);
  let busy = $state(false);
  let dragOver = $state(false);
  let error = $state<string | null>(null);
  let info = $state<string | null>(null);

  const handleFiles = async (list: FileList | File[] | null | undefined) => {
    if (!list) return;
    busy = true;
    error = null;
    try {
      const m = await dbState.init();
      for (const file of Array.from(list)) {
        const tableName = schemaState.uniqueTableName(file.name);
        const qualified = `local.${tableName}`;
        const { columns } = await m.registerFile(file, tableName);
        schemaState.addTable(qualified, columns);
        files = [...files, { filename: file.name, tableName, qualified }];
        track("local_file_registered", {
          extension: file.name.split(".").pop() ?? "",
        });
        if (info === null) {
          info = "Local files clear on reload.";
        }
      }
    } catch (err) {
      const e = err as Error;
      error = friendlyQueryError(e.message ?? String(e));
    } finally {
      busy = false;
    }
  };

  const remove = async (entry: Registered) => {
    busy = true;
    error = null;
    try {
      const m = await dbState.init();
      await m.unregisterFile(entry.filename, entry.tableName);
      schemaState.removeTable(entry.qualified);
      files = files.filter((f) => f !== entry);
    } catch (err) {
      const e = err as Error;
      error = friendlyQueryError(e.message ?? String(e));
    } finally {
      busy = false;
    }
  };

  const onPick = (e: Event) => {
    const target = e.target as HTMLInputElement;
    void handleFiles(target.files);
    target.value = "";
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    dragOver = false;
    void handleFiles(e.dataTransfer?.files);
  };
</script>

<div class="bg-base-200 border-base-300 border-t p-2 text-sm">
  <h3 class="text-base-content/80 mb-1 font-semibold">Local files</h3>
  <label class="btn btn-xs btn-outline mb-1 w-full">
    {busy ? "Loading…" : "Add CSV / Parquet"}
    <input
      type="file"
      multiple
      accept=".csv,.parquet"
      class="hidden"
      onchange={onPick}
      disabled={busy}
    />
  </label>
  <div
    role="region"
    aria-label="File drop zone"
    class="border-base-300 hidden rounded border border-dashed p-2 text-center text-xs md:block"
    class:bg-base-300={dragOver}
    ondragover={(e) => {
      e.preventDefault();
      dragOver = true;
    }}
    ondragleave={() => (dragOver = false)}
    ondrop={onDrop}
  >
    Drop CSV / Parquet here
  </div>
  {#if error}
    <p class="alert alert-error mt-1 p-1 text-xs">{error}</p>
  {/if}
  {#if info}
    <p class="text-base-content/60 mt-1 text-xs">{info}</p>
  {/if}
  {#if files.length > 0}
    <ul class="mt-2 space-y-1">
      {#each files as entry (entry.qualified)}
        <li class="flex items-center justify-between gap-2">
          <span class="truncate font-mono text-xs" title={entry.filename}>
            {entry.qualified}
          </span>
          <button
            type="button"
            class="btn btn-ghost btn-xs"
            onclick={() => remove(entry)}
            disabled={busy}
            aria-label={`Remove ${entry.qualified}`}
          >
            ✕
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</div>
