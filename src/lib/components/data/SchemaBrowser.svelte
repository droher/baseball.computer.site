<script lang="ts">
  import type { EditorView } from "@codemirror/view";
  import { getSchemaState } from "$lib/state/schema.svelte";

  let { view }: { view: EditorView | undefined } = $props();

  const schemaState = getSchemaState();

  const insertAtCursor = (text: string) => {
    if (!view) return;
    const { from, to } = view.state.selection.main;
    view.dispatch({
      changes: { from, to, insert: text },
      selection: { anchor: from + text.length },
    });
    view.focus();
  };

  const grouped = $derived(schemaState.bySchema);
</script>

<div
  class="schema-browser bg-base-200 border-base-300 border-r overflow-y-auto p-2 text-sm"
>
  <h2 class="text-base-content/80 px-2 py-1 font-semibold">Schema</h2>
  {#if grouped.length === 0}
    <p class="text-base-content/60 px-2">Loading…</p>
  {:else}
    <ul class="menu menu-xs w-full">
      {#each grouped as [schemaName, tables] (schemaName)}
        <li>
          <details>
            <summary class="font-medium">{schemaName}</summary>
            <ul>
              {#each tables as [table, cols] (table)}
                <li>
                  <details>
                    <summary>
                      <button
                        type="button"
                        class="link link-hover text-left"
                        onclick={(e) => {
                          e.stopPropagation();
                          insertAtCursor(`${schemaName}.${table}`);
                        }}
                      >
                        {table}
                      </button>
                    </summary>
                    <ul>
                      {#each cols as col (col)}
                        <li>
                          <button
                            type="button"
                            class="link link-hover text-left font-mono text-xs"
                            onclick={() => insertAtCursor(col)}
                          >
                            {col}
                          </button>
                        </li>
                      {/each}
                    </ul>
                  </details>
                </li>
              {/each}
            </ul>
          </details>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .schema-browser {
    min-width: 14rem;
  }
</style>
