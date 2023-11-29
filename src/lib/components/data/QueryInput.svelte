<script lang="ts">
    import CodeMirror from "svelte-codemirror-editor";
    import { PostgreSQL, sql } from "@codemirror/lang-sql";

    export let value = "SELECT * FROM standings LIMIT 50";
    
    // Update value so that it's always at least 10 lines long
    // But don't add any more whitespace than necessary
    $: {
        if (value.split("\n").length < 10) {
        value += "\n".repeat(10 - value.split("\n").length);
        }
    }
</script>

<CodeMirror bind:value lang={sql({dialect: PostgreSQL, upperCaseKeywords: true })} />
