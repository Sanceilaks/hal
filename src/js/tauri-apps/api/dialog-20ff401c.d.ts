/**
 * Extension filters for the file dialog.
 *
 * @since 1.0.0
 */
interface DialogFilter {
    /** Filter name. */
    name: string;
    /**
     * Extensions to filter, without a `.` prefix.
     * @example
     * ```typescript
     * extensions: ['svg', 'png']
     * ```
     */
    extensions: string[];
}
/**
 * Options for the open dialog.
 *
 * @since 1.0.0
 */
interface OpenDialogOptions {
    /** The title of the dialog window. */
    title?: string;
    /** The filters of the dialog. */
    filters?: DialogFilter[];
    /** Initial directory or file path. */
    defaultPath?: string;
    /** Whether the dialog allows multiple selection or not. */
    multiple?: boolean;
    /** Whether the dialog is a directory selection or not. */
    directory?: boolean;
    /**
     * If `directory` is true, indicates that it will be read recursively later.
     * Defines whether subdirectories will be allowed on the scope or not.
     */
    recursive?: boolean;
}
/**
 * Options for the save dialog.
 *
 * @since 1.0.0
 */
interface SaveDialogOptions {
    /** The title of the dialog window. */
    title?: string;
    /** The filters of the dialog. */
    filters?: DialogFilter[];
    /**
     * Initial directory or file path.
     * If it's a directory path, the dialog interface will change to that folder.
     * If it's not an existing directory, the file name will be set to the dialog's file name input and the dialog will be set to the parent folder.
     */
    defaultPath?: string;
}
/**
 * @since 1.0.0
 */
interface MessageDialogOptions {
    /** The title of the dialog. Defaults to the app name. */
    title?: string;
    /** The type of the dialog. Defaults to `info`. */
    type?: 'info' | 'warning' | 'error';
    /** The label of the confirm button. */
    okLabel?: string;
}
interface ConfirmDialogOptions {
    /** The title of the dialog. Defaults to the app name. */
    title?: string;
    /** The type of the dialog. Defaults to `info`. */
    type?: 'info' | 'warning' | 'error';
    /** The label of the confirm button. */
    okLabel?: string;
    /** The label of the cancel button. */
    cancelLabel?: string;
}
/**
 * Open a file/directory selection dialog.
 *
 * The selected paths are added to the filesystem and asset protocol allowlist scopes.
 * When security is more important than the easy of use of this API,
 * prefer writing a dedicated command instead.
 *
 * Note that the allowlist scope change is not persisted, so the values are cleared when the application is restarted.
 * You can save it to the filesystem using [tauri-plugin-persisted-scope](https://github.com/tauri-apps/tauri-plugin-persisted-scope).
 * @example
 * ```typescript
 * import { open } from '@tauri-apps/api/dialog';
 * // Open a selection dialog for image files
 * const selected = await open({
 *   multiple: true,
 *   filters: [{
 *     name: 'Image',
 *     extensions: ['png', 'jpeg']
 *   }]
 * });
 * if (Array.isArray(selected)) {
 *   // user selected multiple files
 * } else if (selected === null) {
 *   // user cancelled the selection
 * } else {
 *   // user selected a single file
 * }
 * ```
 *
 * @example
 * ```typescript
 * import { open } from '@tauri-apps/api/dialog';
 * import { appDir } from '@tauri-apps/api/path';
 * // Open a selection dialog for directories
 * const selected = await open({
 *   directory: true,
 *   multiple: true,
 *   defaultPath: await appDir(),
 * });
 * if (Array.isArray(selected)) {
 *   // user selected multiple directories
 * } else if (selected === null) {
 *   // user cancelled the selection
 * } else {
 *   // user selected a single directory
 * }
 * ```
 *
 * @returns A promise resolving to the selected path(s)
 *
 * @since 1.0.0
 */
declare function open(options?: OpenDialogOptions): Promise<null | string | string[]>;
/**
 * Open a file/directory save dialog.
 *
 * The selected path is added to the filesystem and asset protocol allowlist scopes.
 * When security is more important than the easy of use of this API,
 * prefer writing a dedicated command instead.
 *
 * Note that the allowlist scope change is not persisted, so the values are cleared when the application is restarted.
 * You can save it to the filesystem using [tauri-plugin-persisted-scope](https://github.com/tauri-apps/tauri-plugin-persisted-scope).
 * @example
 * ```typescript
 * import { save } from '@tauri-apps/api/dialog';
 * const filePath = await save({
 *   filters: [{
 *     name: 'Image',
 *     extensions: ['png', 'jpeg']
 *   }]
 * });
 * ```
 *
 * @returns A promise resolving to the selected path.
 *
 * @since 1.0.0
 */
declare function save(options?: SaveDialogOptions): Promise<string | null>;
/**
 * Shows a message dialog with an `Ok` button.
 * @example
 * ```typescript
 * import { message } from '@tauri-apps/api/dialog';
 * await message('Tauri is awesome', 'Tauri');
 * await message('File not found', { title: 'Tauri', type: 'error' });
 * ```
 *
 * @param message The message to show.
 * @param options The dialog's options. If a string, it represents the dialog title.
 *
 * @returns A promise indicating the success or failure of the operation.
 *
 * @since 1.0.0
 *
 */
declare function message(message: string, options?: string | MessageDialogOptions): Promise<void>;
/**
 * Shows a question dialog with `Yes` and `No` buttons.
 * @example
 * ```typescript
 * import { ask } from '@tauri-apps/api/dialog';
 * const yes = await ask('Are you sure?', 'Tauri');
 * const yes2 = await ask('This action cannot be reverted. Are you sure?', { title: 'Tauri', type: 'warning' });
 * ```
 *
 * @param message The message to show.
 * @param options The dialog's options. If a string, it represents the dialog title.
 *
 * @returns A promise resolving to a boolean indicating whether `Yes` was clicked or not.
 *
 * @since 1.0.0
 */
declare function ask(message: string, options?: string | ConfirmDialogOptions): Promise<boolean>;
/**
 * Shows a question dialog with `Ok` and `Cancel` buttons.
 * @example
 * ```typescript
 * import { confirm } from '@tauri-apps/api/dialog';
 * const confirmed = await confirm('Are you sure?', 'Tauri');
 * const confirmed2 = await confirm('This action cannot be reverted. Are you sure?', { title: 'Tauri', type: 'warning' });
 * ```
 *
 * @param message The message to show.
 * @param options The dialog's options. If a string, it represents the dialog title.
 *
 * @returns A promise resolving to a boolean indicating whether `Ok` was clicked or not.
 *
 * @since 1.0.0
 */
declare function confirm(message: string, options?: string | ConfirmDialogOptions): Promise<boolean>;

type dialog_DialogFilter = DialogFilter;
type dialog_OpenDialogOptions = OpenDialogOptions;
type dialog_SaveDialogOptions = SaveDialogOptions;
type dialog_MessageDialogOptions = MessageDialogOptions;
type dialog_ConfirmDialogOptions = ConfirmDialogOptions;
declare const dialog_open: typeof open;
declare const dialog_save: typeof save;
declare const dialog_message: typeof message;
declare const dialog_ask: typeof ask;
declare const dialog_confirm: typeof confirm;
declare namespace dialog {
  export {
    dialog_DialogFilter as DialogFilter,
    dialog_OpenDialogOptions as OpenDialogOptions,
    dialog_SaveDialogOptions as SaveDialogOptions,
    dialog_MessageDialogOptions as MessageDialogOptions,
    dialog_ConfirmDialogOptions as ConfirmDialogOptions,
    dialog_open as open,
    dialog_save as save,
    dialog_message as message,
    dialog_ask as ask,
    dialog_confirm as confirm,
  };
}

export { ConfirmDialogOptions as C, DialogFilter as D, MessageDialogOptions as M, OpenDialogOptions as O, SaveDialogOptions as S, ask as a, confirm as c, dialog as d, message as m, open as o, save as s };