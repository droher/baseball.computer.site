import { SCHEMA_CATALOG_URL } from "$lib/io/data-source";

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
    SCHEMA_CATALOG_URL
  ).then((r) => {
    if (!r.ok) throw new Error(`Unable to load database schema: ${r.status}`);
    return r.json();
  });

  const schema: Record<string, Array<string>> = {};
  for (const nodeData of Object.values(catalogData.nodes)) {
    const tableName = `${nodeData.metadata.schema}.${nodeData.metadata.name}`;
    const columns = Object.values(nodeData.columns).map((c) => c.name);
    schema[tableName] = columns;
  }

  return { schema: schema };
};

export const prerender = true;
