<script lang="ts">
  import CodeMirror from "svelte-codemirror-editor";
  import { PostgreSQL, sql } from "@codemirror/lang-sql";
  import { Compartment, type Extension } from "@codemirror/state";
  import { EditorView } from "@codemirror/view";
  import { onMount, untrack } from "svelte";

  import Warning from "../svg/Warning.svelte";
  import { EXAMPLE_QUERY } from "./example-query";

  let {
    schema = {},
    schemaVersion = 0,
    value = $bindable(EXAMPLE_QUERY),
    onReady,
  }: {
    schema?: Record<string, Array<string>>;
    /**
     * Monotonic counter — bump to trigger a Compartment.reconfigure
     * without making this component depend on the schema map's
     * structural identity. Avoids re-stringifying a large catalog.
     */
    schemaVersion?: number;
    value?: string;
    onReady?: (view: EditorView) => void;
  } = $props();

  const sqlCompartment = new Compartment();
  const buildSql = (s: Record<string, Array<string>>): Extension =>
    sql({
      dialect: PostgreSQL,
      upperCaseKeywords: true,
      schema: s,
      defaultSchema: "main_models",
    });

  // Captured once at script init. Subsequent schema updates dispatch
  // a Compartment.reconfigure rather than re-rendering the prop, which
  // would cause svelte-codemirror-editor to rebuild the whole state.
  const initialExtensions: Extension[] = [
    sqlCompartment.of(buildSql(untrack(() => schema))),
  ];

  let view: EditorView | undefined = $state();
  let isMobile = $state(false);

  const handleReady = (v: EditorView) => {
    view = v;
    onReady?.(v);
  };

  $effect(() => {
    // Reconfigure the SQL extension whenever the parent bumps
    // `schemaVersion`. The void-cast is the dependency registration —
    // we don't otherwise need the value, but reading it here is what
    // makes Svelte re-run this effect on add / remove. Avoids
    // re-walking the catalog on every unrelated parent render.
    void schemaVersion;
    if (view) {
      view.dispatch({
        effects: sqlCompartment.reconfigure(buildSql(schema)),
      });
    }
  });

  onMount(() => {
    isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
  });
</script>

{#if isMobile}
  <div role="alert" class="alert alert-warning">
    <Warning />
    <span
      >Mobile queries may not behave as expected due to low memory. Do not run
      on metered data connections.</span
    >
    <button class="btn btn-ghost justify-end" onclick={() => (isMobile = false)}
      >Close</button
    >
  </div>
{/if}

<div role="region" aria-label="SQL query editor" class="query-editor">
  <CodeMirror
    bind:value
    nodebounce
    extensions={initialExtensions}
    onready={handleReady}
  />
</div>

<style>
  .query-editor :global(.codemirror-wrapper),
  .query-editor :global(.cm-editor) {
    min-height: 16rem;
  }
  .query-editor :global(.cm-scroller) {
    min-height: 16rem;
  }
</style>
