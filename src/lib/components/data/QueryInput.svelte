<script lang="ts">
  import CodeMirror from "svelte-codemirror-editor";
  import { PostgreSQL, sql } from "@codemirror/lang-sql";
  import { onMount } from "svelte";

  import Warning from "../svg/Warning.svelte";

  export let schema: Record<string, Array<String>> = {};

  const initQuery = `-- Get over 200 offensive statistics for every player and every season in history
SELECT
  p.first_name,
  p.last_name,
  m.*
FROM metrics_player_season_league_offense AS m
JOIN people AS p USING (player_id)
ORDER BY home_runs DESC`;

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
  lang={sql({
    dialect: PostgreSQL,
    upperCaseKeywords: true,
    schema: schema,
    defaultSchema: "main_models",
  })}
  aria-label="Enter a query"
/>
