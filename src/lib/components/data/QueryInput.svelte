<script lang="ts">
  import CodeMirror from "svelte-codemirror-editor";
  import { PostgreSQL, sql } from "@codemirror/lang-sql";
  import { onMount } from "svelte";

  import Warning from "../svg/Warning.svelte";

  export let schema: Record<string, Array<string>> = {};

  const initQuery = `SELECT  
    o.player_id,
    p.first_name,
    p.last_name,
    COUNT(*)
FROM event_offense_stats AS o
JOIN people AS p USING (player_id)
WHERE runs_batted_in > 0
    AND event_key IN (SELECT event_key FROM event_pitching_flags WHERE blown_save_flag)
GROUP BY 1`;

  export let value = initQuery;
  let isMobile = false;

  // Update value so that it's always at least 10 lines long
  // But don't add any more whitespace than necessary
  $: {
    value = value || initQuery;
    if (value.split("\n").length < 10) {
      value += "\n".repeat(10 - value.split("\n").length);
    }
  }

  onMount(async () => {
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
      >Queries may use a lot of data. Wifi or unlimited plan recommended.</span
    >
    <button
      class="btn btn-ghost justify-end"
      on:click={() => (isMobile = false)}>Close</button
    >
  </div>
{/if}

<CodeMirror
  bind:value
  lang={sql({ dialect: PostgreSQL, upperCaseKeywords: true, schema: schema, defaultSchema: "main_models" })}
/>
