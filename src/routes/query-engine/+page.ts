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

export const load = async () => {
  const catalogData: { nodes: Record<string, NodeData> } = await fetch(
    "https://data.baseball.computer/dbt/catalog.json"
  ).then((r) => r.json());

  const schema: Record<string, Array<string>> = {};
  for (const nodeData of Object.values(catalogData.nodes)) {
    const tableName = `${nodeData.metadata.schema}.${nodeData.metadata.name}`;
    const columns = Object.values(nodeData.columns).map((c) => c.name);
    schema[tableName] = columns;
  }

  return { schema: schema };
};

export const prerender = true;
