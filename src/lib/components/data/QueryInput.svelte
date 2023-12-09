<script lang="ts">
  import CodeMirror from "svelte-codemirror-editor";
  import { PostgreSQL, sql } from "@codemirror/lang-sql";
  import { onMount } from "svelte";

  const initQuery = "SELECT * FROM standings LIMIT 50";
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

  onMount(() => {
        console.log(navigator.userAgent);
        isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    });
</script>

{#if isMobile}
    <div role="alert" class="alert alert-warning">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span>Queries may use a lot of data. Wifi or unlimited plan recommended.</span>
        <button class="btn btn-ghost justify-end" on:click={() => isMobile = false}>Close</button>
    </div>
{/if}

<CodeMirror
  bind:value
  lang={sql({ dialect: PostgreSQL, upperCaseKeywords: true })}
/>
