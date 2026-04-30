import { dev } from "$app/environment";
import { track as vercelTrack } from "@vercel/analytics";

type Props = Record<string, string | number | boolean | null>;

export const track = (event: string, props?: Props): void => {
  if (dev) return;
  try {
    vercelTrack(event, props);
  } catch {
    // analytics failures must never break the app
  }
};
