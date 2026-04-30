export const encodeQuery = (query: string): string =>
  encodeURIComponent(btoa(query.trim()));

export const decodeQuery = (encoded: string | null | undefined): string => {
  if (!encoded) return "";
  try {
    return atob(decodeURIComponent(encoded));
  } catch {
    return "";
  }
};
