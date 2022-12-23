<script lang="ts">
	import type { Table } from 'apache-arrow';
	import { DataHandler, Th} from '@vincjo/datatables';
	import { getTableFields } from './db';

	export let arrow_table: Table;

	const fields = getTableFields(arrow_table);
	const data: Object[] = arrow_table.toArray();

	const handler = new DataHandler(data);
	const rows = handler.getRows();
</script>

<table class="table table-zebra table-compact">
	<thead>
		<tr>
			{#each fields as field}
				<Th {handler}>{field}</Th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#if rows}
			{#each $rows as row}
				<tr>
					{#each fields as field}
						<td>{row[field]}</td>
					{/each}
				</tr>
			{/each}
		{/if}
	</tbody>
</table>
