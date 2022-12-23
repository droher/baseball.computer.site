<script lang="ts">
	import CodeMirror from 'svelte-codemirror-editor';
	import { sql, PostgreSQL } from '@codemirror/lang-sql';

	import type { SQLConfig } from '@codemirror/lang-sql';

	const sql_config: SQLConfig = { dialect: PostgreSQL, upperCaseKeywords: true };

	export let value = '';
</script>

<CodeMirror bind:value lang={sql(sql_config)} />