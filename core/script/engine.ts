
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph.ScriptEngine {

    //
    // ─── STATUS VARS ────────────────────────────────────────────────────────────────
    //

        /** Shows the status of runtime, good run or bad run. */
        export var RunStatus: boolean = true;

    //
    // ─── RUNNER ─────────────────────────────────────────────────────────────────────
    //

        /**
         * Runs a js code a returns the ***evaluation***, and then sets
         * the ***run status*** to what true or false based on if it
         * was with success or not.
         */

        export function Run ( script: string ): any {
            try {
                RunStatus = true;
                return eval( script );
            } catch ( err ) {
                RunStatus = false;
                return err.toString( );
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}