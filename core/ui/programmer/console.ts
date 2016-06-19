
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
                \n${ console.innerText }`
            );
        }

    //
	// ─── PRINT MATRIX ───────────────────────────────────────────────────────────────
	//

        export function PrintMatrix( matrix: number[ ][ ] ) {
            // Generating the HTML code
            function generateMatrixHTML( ): string {
                var matrixInside = '';
                for ( var i = 0; i < matrix.length; i++ ) {
                    var line = '';
                    for ( var j = 0; j < matrix[ i ].length; j++ ) {
                        line += `<td>${ matrix[ i ][ j ] }</td>`;
                    }
                    matrixInside += line + `<tr>${ matrixInside }</tr>`;
                }
                return `<table class="matrix">${ matrixInside }</table>`;
            }
            // printing
            var console = document.getElementById( ConsoleId );
            console.innerHTML = `${ generateMatrixHTML() }<br/>${ console.innerHTML }`;
        }

    //
	// ─── CLEAN ──────────────────────────────────────────────────────────────────────
	//

        export function Clean( ) {
            document.getElementById( ConsoleId ).innerHTML = '';
        }

    // ────────────────────────────────────────────────────────────────────────────────

}