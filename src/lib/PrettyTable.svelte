<script>

	import { Datatable } from 'svelte-simple-datatables';

	export let data;
    export let fields;

	let rows;

	const settings = {
		sortable: true,
		pagination: true,
		rowsPerPage: 50,
		columnFilter: true
	};
	console.log(data);
</script>

<Datatable {settings} {data} bind:dataRows={rows}>
	<thead>
        {#each fields as field}
		<th data-key='{field}'>{field}</th>
        {/each}
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
</Datatable>
