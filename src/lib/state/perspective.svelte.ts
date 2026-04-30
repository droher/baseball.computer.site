import { browser } from "$app/environment";
import { createContext } from "svelte";
import type { Client } from "@finos/perspective";

export class PerspectiveState {
  client: Client | null = $state(null);
  private clientPromise: Promise<Client> | null = null;

  async getClient(): Promise<Client> {
    if (!browser) {
      return Promise.reject(
        new Error("PerspectiveState only initializes in browser")
      );
    }
    if (this.clientPromise) return this.clientPromise;
    this.clientPromise = (async () => {
      const perspective = (await import("@finos/perspective")).default;
      const perspective_viewer = (await import("@finos/perspective-viewer"))
        .default;
      await import("@finos/perspective-viewer-d3fc");
      await import("@finos/perspective-viewer-datagrid");

      const SERVER_WASM = (
        await import("@finos/perspective/dist/wasm/perspective-server.wasm?url")
      ).default;
      const CLIENT_WASM = (
        await import("@finos/perspective-viewer/dist/wasm/perspective-viewer.wasm?url")
      ).default;

      perspective.init_server(fetch(SERVER_WASM));
      // Must await: perspective.worker() reads the registered
      // perspective-viewer custom element's __wasm_module__ for its client
      // wasm, and customElements.define happens inside init_client.
      await perspective_viewer.init_client(fetch(CLIENT_WASM));

      const c = await perspective.worker();
      this.client = c;
      return c;
    })();
    return this.clientPromise;
  }
}

export const [getPerspectiveState, setPerspectiveState] =
  createContext<PerspectiveState>();
