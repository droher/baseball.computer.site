type NodeData = {
  metadata: {
    schema: string;
    name: string;
  };
  columns: Record<
    string,
    {
      name: string;
    }
  >;
};

export const load = async ({ url }) => {
    const catalogData: Record<string, { nodes: NodeData }> = await fetch(
    "https://data.baseball.computer/dbt/catalog.json"
  ).then((r) => r.json());

  let schema: Record<string, Array<String>> = {};
  for (const nodeData of Object.values(catalogData.nodes)) {
    const tableName = `${nodeData.metadata.schema}.${nodeData.metadata.name}`;
    const columns = Object.values(nodeData.columns).map((c) => c.name);
    schema[tableName] = columns;
  }

  return { schema: schema };
};

export const prerender = true;
