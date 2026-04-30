import type { DbState } from "$lib/state/db.svelte";

export async function downloadResult(
  db: DbState,
  query: string,
  format: "csv" | "parquet"
): Promise<void> {
  const buffer = await db.copyToBuffer(query, format);
  const mime = format === "csv" ? "text/csv" : "application/octet-stream";
  const copy = new Uint8Array(buffer.byteLength);
  copy.set(buffer);
  const blob = new Blob([copy], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `result.${format}`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 0);
}
