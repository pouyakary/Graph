
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
            console.innerHTML = `${ ToConsoleString( input ) }\n${ console.innerHTML }`;
        }

    //
	// ─── TO CONSOLE STRING ──────────────────────────────────────────────────────────
	//

        function ToConsoleString( input: any ): string {
            return input.toString( ).replace( '<' , '&lt;' ).replace( '>' ,'&gt;' );
        }

    //
	// ─── PRINT ERROR ────────────────────────────────────────────────────────────────
	//

        export function PrintError( error: string ) {
            let console = document.getElementById( ConsoleId );
            console.innerHTML = (
                `<span class="console-error">${ error.toString() }</span>\n${ console.innerText }`
            );
        }

    //
	// ─── PRINT MATRIX ───────────────────────────────────────────────────────────────
	//

        export function PrintMatrix( ) {
            let console = document.getElementById( ConsoleId );
            console.innerHTML = (
                `$$ \frac{1}{2} $$\n${ console.innerText }`
            );
        }

    //
	// ─── CLEAN ──────────────────────────────────────────────────────────────────────
	//

        export function Clean( ) {
            document.getElementById( ConsoleId ).innerHTML = '';
        }

    // ────────────────────────────────────────────────────────────────────────────────

}