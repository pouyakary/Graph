
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph.UI.Console {

    //
	// ─── PRINT  ─────────────────────────────────────────────────────────────────────
	//

        export function Print( input: any ) {
            let console = document.getElementById( ConsoleId );
            console.innerText = `${ input.toString() }\n${ console.innerText }`;
        }

    //
	// ─── CLEAN ──────────────────────────────────────────────────────────────────────
	//

        export function Clean( ) {
            document.getElementById( ConsoleId ).innerHTML = '';
        }

    // ────────────────────────────────────────────────────────────────────────────────

}