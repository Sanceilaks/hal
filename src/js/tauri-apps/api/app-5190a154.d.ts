/**
 * Gets the application version.
 * @example
 * ```typescript
 * import { getVersion } from '@tauri-apps/api/app';
 * const appVersion = await getVersion();
 * ```
 *
 * @since 1.0.0
 */
declare function getVersion(): Promise<string>;
/**
 * Gets the application name.
 * @example
 * ```typescript
 * import { getName } from '@tauri-apps/api/app';
 * const appName = await getName();
 * ```
 *
 * @since 1.0.0
 */
declare function getName(): Promise<string>;
/**
 * Gets the Tauri version.
 *
 * @example
 * ```typescript
 * import { getTauriVersion } from '@tauri-apps/api/app';
 * const tauriVersion = await getTauriVersion();
 * ```
 *
 * @since 1.0.0
 */
declare function getTauriVersion(): Promise<string>;
/**
 * Shows the application on macOS. This function does not automatically focus any specific app window.
 *
 * @example
 * ```typescript
 * import { show } from '@tauri-apps/api/app';
 * await show();
 * ```
 *
 * @since 1.2.0
 */
declare function show(): Promise<void>;
/**
 * Hides the application on macOS.
 *
 * @example
 * ```typescript
 * import { hide } from '@tauri-apps/api/app';
 * await hide();
 * ```
 *
 * @since 1.2.0
 */
declare function hide(): Promise<void>;

declare const app_getName: typeof getName;
declare const app_getVersion: typeof getVersion;
declare const app_getTauriVersion: typeof getTauriVersion;
declare const app_show: typeof show;
declare const app_hide: typeof hide;
declare namespace app {
  export {
    app_getName as getName,
    app_getVersion as getVersion,
    app_getTauriVersion as getTauriVersion,
    app_show as show,
    app_hide as hide,
  };
}

export { app as a, getVersion as b, getTauriVersion as c, getName as g, hide as h, show as s };
