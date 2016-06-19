
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

        export function Run( script: string ): string {
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