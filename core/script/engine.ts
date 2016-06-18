
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph.ScriptEngine {

    //
	// ─── RUNNER ─────────────────────────────────────────────────────────────────────
	//

        export function Run( script: string ) {
            try {
                eval( script );
            } catch ( err ) {
                UI.Console.PrintError( err.toString( ) );
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}