<script lang="ts">
  import CodeMirror from "svelte-codemirror-editor";
  import { PostgreSQL, sql } from "@codemirror/lang-sql";
  import { onMount } from "svelte";

  import Warning from "../svg/Warning.svelte";

  const initQuery = `-- Get over 200 offensive statistics for every player in MLB history
-- To get started, click the "Analyze" button below
-- To explore the database, check out the documentation:
-- https://docs.baseball.computer
SELECT
  p.first_name,
  p.last_name,
  m.*
FROM metrics_player_career_offense AS m
JOIN people AS p USING (player_id)
ORDER BY home_runs DESC`;

  let {
    schema = {},
    value = $bindable(initQuery),
  }: {
    schema?: Record<string, Array<string>>;
    value?: string;
  } = $props();

  let isMobile = $state(false);

  // Pad value to at least 10 lines without adding more whitespace than necessary
  $effect(() => {
    const current = value || initQuery;
    const lineCount = current.split("\n").length;
    if (lineCount < 10) {
      value = current + "\n".repeat(10 - lineCount);
    } else if (current !== value) {
      value = current;
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

<div role="region" aria-label="SQL query editor">
  <CodeMirror
    bind:value
    lang={sql({
      dialect: PostgreSQL,
      upperCaseKeywords: true,
      schema: schema,
      defaultSchema: "main_models",
    })}
  />
</div>
