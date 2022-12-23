<script lang="ts">
	import type { StructRow, Table } from 'apache-arrow';
	import { getTableFields } from './db';

	export let arrow_table: Table;

	const fields = getTableFields(arrow_table);
	const data = arrow_table.toArray().map(
		(row: StructRow) => row.toJSON()
	);

</script>

<table class="table table-zebra table-compact">
	<thead>
		<tr>
			{#each fields as field}
				<th>{field}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#if data}
			{#each data as row}
				<tr>
					{#each fields as field}
						<td>{row[field]}</td>
					{/each}
				</tr>
			{/each}
		{/if}
	</tbody>
</table>
