/**
 * @since 1.0.0
 */
declare enum BaseDirectory {
    Audio = 1,
    Cache = 2,
    Config = 3,
    Data = 4,
    LocalData = 5,
    Desktop = 6,
    Document = 7,
    Download = 8,
    Executable = 9,
    Font = 10,
    Home = 11,
    Picture = 12,
    Public = 13,
    Runtime = 14,
    Template = 15,
    Video = 16,
    Resource = 17,
    App = 18,
    Log = 19,
    Temp = 20,
    AppConfig = 21,
    AppData = 22,
    AppLocalData = 23,
    AppCache = 24,
    AppLog = 25
}
/**
 * @since 1.0.0
 */
interface FsOptions {
    dir?: BaseDirectory;
}
/**
 * @since 1.0.0
 */
interface FsDirOptions {
    dir?: BaseDirectory;
    recursive?: boolean;
}
/**
 * Options object used to write a UTF-8 string to a file.
 *
 * @since 1.0.0
 */
interface FsTextFileOption {
    /** Path to the file to write. */
    path: string;
    /** The UTF-8 string to write to the file. */
    contents: string;
}
type BinaryFileContents = Iterable<number> | ArrayLike<number> | ArrayBuffer;
/**
 * Options object used to write a binary data to a file.
 *
 * @since 1.0.0
 */
interface FsBinaryFileOption {
    /** Path to the file to write. */
    path: string;
    /** The byte array contents. */
    contents: BinaryFileContents;
}
/**
 * @since 1.0.0
 */
interface FileEntry {
    path: string;
    /**
     * Name of the directory/file
     * can be null if the path terminates with `..`
     */
    name?: string;
    /** Children of this entry if it's a directory; null otherwise */
    children?: FileEntry[];
}
/**
 * Reads a file as an UTF-8 encoded string.
 * @example
 * ```typescript
 * import { readTextFile, BaseDirectory } from '@tauri-apps/api/fs';
 * // Read the text file in the `$APPCONFIG/app.conf` path
 * const contents = await readTextFile('app.conf', { dir: BaseDirectory.AppConfig });
 * ```
 *
 * @since 1.0.0
 */
declare function readTextFile(filePath: string, options?: FsOptions): Promise<string>;
/**
 * Reads a file as byte array.
 * @example
 * ```typescript
 * import { readBinaryFile, BaseDirectory } from '@tauri-apps/api/fs';
 * // Read the image file in the `$RESOURCEDIR/avatar.png` path
 * const contents = await readBinaryFile('avatar.png', { dir: BaseDirectory.Resource });
 * ```
 *
 * @since 1.0.0
 */
declare function readBinaryFile(filePath: string, options?: FsOptions): Promise<Uint8Array>;
/**
 * Writes a UTF-8 text file.
 * @example
 * ```typescript
 * import { writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';
 * // Write a text file to the `$APPCONFIG/app.conf` path
 * await writeTextFile('app.conf', 'file contents', { dir: BaseDirectory.AppConfig });
 * ```
 *
 * @since 1.0.0
 */
declare function writeTextFile(path: string, contents: string, options?: FsOptions): Promise<void>;
/**
 * Writes a UTF-8 text file.
 * @example
 * ```typescript
 * import { writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';
 * // Write a text file to the `$APPCONFIG/app.conf` path
 * await writeTextFile({ path: 'app.conf', contents: 'file contents' }, { dir: BaseDirectory.AppConfig });
 * ```
 * @returns A promise indicating the success or failure of the operation.
 *
 * @since 1.0.0
 */
declare function writeTextFile(file: FsTextFileOption, options?: FsOptions): Promise<void>;
/**
 * Writes a byte array content to a file.
 * @example
 * ```typescript
 * import { writeBinaryFile, BaseDirectory } from '@tauri-apps/api/fs';
 * // Write a binary file to the `$APPDATA/avatar.png` path
 * await writeBinaryFile('avatar.png', new Uint8Array([]), { dir: BaseDirectory.AppData });
 * ```
 *
 * @param options Configuration object.
 * @returns A promise indicating the success or failure of the operation.
 *
 * @since 1.0.0
 */
declare function writeBinaryFile(path: string, contents: BinaryFileContents, options?: FsOptions): Promise<void>;
/**
 * Writes a byte array content to a file.
 * @example
 * ```typescript
 * import { writeBinaryFile, BaseDirectory } from '@tauri-apps/api/fs';
 * // Write a binary file to the `$APPDATA/avatar.png` path
 * await writeBinaryFile({ path: 'avatar.png', contents: new Uint8Array([]) }, { dir: BaseDirectory.AppData });
 * ```
 *
 * @param file The object containing the file path and contents.
 * @param options Configuration object.
 * @returns A promise indicating the success or failure of the operation.
 *
 * @since 1.0.0
 */
declare function writeBinaryFile(file: FsBinaryFileOption, options?: FsOptions): Promise<void>;
/**
 * List directory files.
 * @example
 * ```typescript
 * import { readDir, BaseDirectory } from '@tauri-apps/api/fs';
 * // Reads the `$APPDATA/users` directory recursively
 * const entries = await readDir('users', { dir: BaseDirectory.AppData, recursive: true });
 *
 * function processEntries(entries) {
 *   for (const entry of entries) {
 *     console.log(`Entry: ${entry.path}`);
 *     if (entry.children) {
 *       processEntries(entry.children)
 *     }
 *   }
 * }
 * ```
 *
 * @since 1.0.0
 */
declare function readDir(dir: string, options?: FsDirOptions): Promise<FileEntry[]>;
/**
 * Creates a directory.
 * If one of the path's parent components doesn't exist
 * and the `recursive` option isn't set to true, the promise will be rejected.
 * @example
 * ```typescript
 * import { createDir, BaseDirectory } from '@tauri-apps/api/fs';
 * // Create the `$APPDATA/users` directory
 * await createDir('users', { dir: BaseDirectory.AppData, recursive: true });
 * ```
 *
 * @returns A promise indicating the success or failure of the operation.
 *
 * @since 1.0.0
 */
declare function createDir(dir: string, options?: FsDirOptions): Promise<void>;
/**
 * Removes a directory.
 * If the directory is not empty and the `recursive` option isn't set to true, the promise will be rejected.
 * @example
 * ```typescript
 * import { removeDir, BaseDirectory } from '@tauri-apps/api/fs';
 * // Remove the directory `$APPDATA/users`
 * await removeDir('users', { dir: BaseDirectory.AppData });
 * ```
 *
 * @returns A promise indicating the success or failure of the operation.
 *
 * @since 1.0.0
 */
declare function removeDir(dir: string, options?: FsDirOptions): Promise<void>;
/**
 * Copies a file to a destination.
 * @example
 * ```typescript
 * import { copyFile, BaseDirectory } from '@tauri-apps/api/fs';
 * // Copy the `$APPCONFIG/app.conf` file to `$APPCONFIG/app.conf.bk`
 * await copyFile('app.conf', 'app.conf.bk', { dir: BaseDirectory.AppConfig });
 * ```
 *
 * @returns A promise indicating the success or failure of the operation.
 *
 * @since 1.0.0
 */
declare function copyFile(source: string, destination: string, options?: FsOptions): Promise<void>;
/**
 * Removes a file.
 * @example
 * ```typescript
 * import { removeFile, BaseDirectory } from '@tauri-apps/api/fs';
 * // Remove the `$APPConfig/app.conf` file
 * await removeFile('app.conf', { dir: BaseDirectory.AppConfig });
 * ```
 *
 * @returns A promise indicating the success or failure of the operation.
 *
 * @since 1.0.0
 */
declare function removeFile(file: string, options?: FsOptions): Promise<void>;
/**
 * Renames a file.
 * @example
 * ```typescript
 * import { renameFile, BaseDirectory } from '@tauri-apps/api/fs';
 * // Rename the `$APPDATA/avatar.png` file
 * await renameFile('avatar.png', 'deleted.png', { dir: BaseDirectory.AppData });
 * ```
 *
 * @returns A promise indicating the success or failure of the operation.
 *
 * @since 1.0.0
 */
declare function renameFile(oldPath: string, newPath: string, options?: FsOptions): Promise<void>;
/**
 * Check if a path exists.
 * @example
 * ```typescript
 * import { exists, BaseDirectory } from '@tauri-apps/api/fs';
 * // Check if the `$APPDATA/avatar.png` file exists
 * await exists('avatar.png', { dir: BaseDirectory.AppData });
 * ```
 *
 * @since 1.1.0
 */
declare function exists(path: string, options?: FsOptions): Promise<boolean>;

type fs_FsOptions = FsOptions;
type fs_FsDirOptions = FsDirOptions;
type fs_FsTextFileOption = FsTextFileOption;
type fs_BinaryFileContents = BinaryFileContents;
type fs_FsBinaryFileOption = FsBinaryFileOption;
type fs_FileEntry = FileEntry;
declare const fs_readTextFile: typeof readTextFile;
declare const fs_readBinaryFile: typeof readBinaryFile;
declare const fs_writeTextFile: typeof writeTextFile;
declare const fs_writeBinaryFile: typeof writeBinaryFile;
declare const fs_readDir: typeof readDir;
declare const fs_createDir: typeof createDir;
declare const fs_removeDir: typeof removeDir;
declare const fs_copyFile: typeof copyFile;
declare const fs_removeFile: typeof removeFile;
declare const fs_renameFile: typeof renameFile;
declare const fs_exists: typeof exists;
type fs_BaseDirectory = BaseDirectory;
declare const fs_BaseDirectory: typeof BaseDirectory;
declare namespace fs {
  export {
    fs_FsOptions as FsOptions,
    fs_FsDirOptions as FsDirOptions,
    fs_FsTextFileOption as FsTextFileOption,
    fs_BinaryFileContents as BinaryFileContents,
    fs_FsBinaryFileOption as FsBinaryFileOption,
    fs_FileEntry as FileEntry,
    BaseDirectory as Dir,
    fs_readTextFile as readTextFile,
    fs_readBinaryFile as readBinaryFile,
    fs_writeTextFile as writeTextFile,
    writeTextFile as writeFile,
    fs_writeBinaryFile as writeBinaryFile,
    fs_readDir as readDir,
    fs_createDir as createDir,
    fs_removeDir as removeDir,
    fs_copyFile as copyFile,
    fs_removeFile as removeFile,
    fs_renameFile as renameFile,
    fs_exists as exists,
    fs_BaseDirectory as BaseDirectory,
  };
}

export { BaseDirectory as B, FsOptions as F, FsDirOptions as a, FsTextFileOption as b, BinaryFileContents as c, FsBinaryFileOption as d, FileEntry as e, fs as f, readBinaryFile as g, writeBinaryFile as h, readDir as i, createDir as j, removeDir as k, copyFile as l, removeFile as m, renameFile as n, exists as o, readTextFile as r, writeTextFile as w };
