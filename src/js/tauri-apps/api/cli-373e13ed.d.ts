/**
 * @since 1.0.0
 */
interface ArgMatch {
    /**
     * string if takes value
     * boolean if flag
     * string[] or null if takes multiple values
     */
    value: string | boolean | string[] | null;
    /**
     * Number of occurrences
     */
    occurrences: number;
}
/**
 * @since 1.0.0
 */
interface SubcommandMatch {
    name: string;
    matches: CliMatches;
}
/**
 * @since 1.0.0
 */
interface CliMatches {
    args: Record<string, ArgMatch>;
    subcommand: SubcommandMatch | null;
}
/**
 * Parse the arguments provided to the current process and get the matches using the configuration defined [`tauri.cli`](https://tauri.app/v1/api/config/#tauriconfig.cli) in `tauri.conf.json`
 * @example
 * ```typescript
 * import { getMatches } from '@tauri-apps/api/cli';
 * const matches = await getMatches();
 * if (matches.subcommand?.name === 'run') {
 *   // `./your-app run $ARGS` was executed
 *   const args = matches.subcommand?.matches.args
 *   if ('debug' in args) {
 *     // `./your-app run --debug` was executed
 *   }
 * } else {
 *   const args = matches.args
 *   // `./your-app $ARGS` was executed
 * }
 * ```
 *
 * @since 1.0.0
 */
declare function getMatches(): Promise<CliMatches>;

type cli_ArgMatch = ArgMatch;
type cli_SubcommandMatch = SubcommandMatch;
type cli_CliMatches = CliMatches;
declare const cli_getMatches: typeof getMatches;
declare namespace cli {
  export {
    cli_ArgMatch as ArgMatch,
    cli_SubcommandMatch as SubcommandMatch,
    cli_CliMatches as CliMatches,
    cli_getMatches as getMatches,
  };
}

export { ArgMatch as A, CliMatches as C, SubcommandMatch as S, cli as c, getMatches as g };