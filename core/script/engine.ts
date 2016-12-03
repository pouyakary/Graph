
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

namespace Graph.ScriptEngine {

    //
    // ─── STATUS VARS ────────────────────────────────────────────────────────────────
    //

        /** Shows the status of runtime, good run or bad run. */
        export var RunStatus: boolean = true;

    //
    // ─── RUNTIME RESULTS ────────────────────────────────────────────────────────────
    //

        export interface ICodeRuntimeResults {
            result?: any;
            error?: string;
            success: boolean;
        }

    //
    // ─── RUNNER ─────────────────────────────────────────────────────────────────────
    //

        /**
         * Runs a js code a returns the ***evaluation***, and then sets
         * the ***run status*** to what true or false based on if it
         * was with success or not.
         */

        export function Run ( script: string ): ICodeRuntimeResults {
            try {
                RunStatus = true;
                return {
                    success: true,
                    result: eval( script )
                }
            } catch ( err ) {
                return {
                    success: false,
                    error: err.toString( )
                }
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}