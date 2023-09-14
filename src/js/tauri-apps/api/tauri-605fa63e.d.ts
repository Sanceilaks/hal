/**
 * Invoke your custom commands.
 *
 * This package is also accessible with `window.__TAURI__.tauri` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.
 * @module
 */
/** @ignore */
declare global {
    interface Window {
        __TAURI_IPC__: (message: any) => void;
        ipc: {
            postMessage: (args: string) => void;
        };
    }
}
/**
 * Transforms a callback function to a string identifier that can be passed to the backend.
 * The backend uses the identifier to `eval()` the callback.
 *
 * @return A unique identifier associated with the callback function.
 *
 * @since 1.0.0
 */
declare function transformCallback(callback?: (response: any) => void, once?: boolean): number;
/**
 * Command arguments.
 *
 * @since 1.0.0
 */
type InvokeArgs = Record<string, unknown>;
/**
 * Sends a message to the backend.
 * @example
 * ```typescript
 * import { invoke } from '@tauri-apps/api/tauri';
 * await invoke('login', { user: 'tauri', password: 'poiwe3h4r5ip3yrhtew9ty' });
 * ```
 *
 * @param cmd The command name.
 * @param args The optional arguments to pass to the command.
 * @return A promise resolving or rejecting to the backend response.
 *
 * @since 1.0.0
 */
declare function invoke<T>(cmd: string, args?: InvokeArgs): Promise<T>;
/**
 * Convert a device file path to an URL that can be loaded by the webview.
 * Note that `asset:` and `https://asset.localhost` must be added to [`tauri.security.csp`](https://tauri.app/v1/api/config/#securityconfig.csp) in `tauri.conf.json`.
 * Example CSP value: `"csp": "default-src 'self'; img-src 'self' asset: https://asset.localhost"` to use the asset protocol on image sources.
 *
 * Additionally, `asset` must be added to [`tauri.allowlist.protocol`](https://tauri.app/v1/api/config/#allowlistconfig.protocol)
 * in `tauri.conf.json` and its access scope must be defined on the `assetScope` array on the same `protocol` object.
 *
 * @param  filePath The file path.
 * @param  protocol The protocol to use. Defaults to `asset`. You only need to set this when using a custom protocol.
 * @example
 * ```typescript
 * import { appDataDir, join } from '@tauri-apps/api/path';
 * import { convertFileSrc } from '@tauri-apps/api/tauri';
 * const appDataDirPath = await appDataDir();
 * const filePath = await join(appDataDirPath, 'assets/video.mp4');
 * const assetUrl = convertFileSrc(filePath);
 *
 * const video = document.getElementById('my-video');
 * const source = document.createElement('source');
 * source.type = 'video/mp4';
 * source.src = assetUrl;
 * video.appendChild(source);
 * video.load();
 * ```
 *
 * @return the URL that can be used as source on the webview.
 *
 * @since 1.0.0
 */
declare function convertFileSrc(filePath: string, protocol?: string): string;

type tauri_InvokeArgs = InvokeArgs;
declare const tauri_transformCallback: typeof transformCallback;
declare const tauri_invoke: typeof invoke;
declare const tauri_convertFileSrc: typeof convertFileSrc;
declare namespace tauri {
  export {
    tauri_InvokeArgs as InvokeArgs,
    tauri_transformCallback as transformCallback,
    tauri_invoke as invoke,
    tauri_convertFileSrc as convertFileSrc,
  };
}

export { InvokeArgs as I, transformCallback as a, convertFileSrc as c, invoke as i, tauri as t };