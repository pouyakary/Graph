
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/**
 * Programmer's ***Notebook View*** must have different ways to 
 * show that viewthis namespace implements different systems for 
 * the say.
 */


module KaryGraph.UI.Programmer {

    //
	// ─── SAY MAIN ───────────────────────────────────────────────────────────────────
	//

        export function Say ( input: any ): string {
            
            // if were going to have an undefined type.
            if ( input == undefined ) {
                return SayImplementations.Undefined( );
            }

            // if we have type
            switch ( input.constructor.name ) {
                case "String":
                    return SayImplementations.String( input );

                case "Array":
                    if ( input[ 0 ].constructor.name == "Array" ) {
                        // Matrix
                        return SayImplementations.Matrix( input );
                    } else {
                        // Normal Array
                        return SayImplementations.Array( input );
                    }

                default:
                    return SayImplementations.Object( input );
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}




module KaryGraph.UI.Programmer.SayImplementations {

    //
	// ─── UNDEFINED ──────────────────────────────────────────────────────────────────
	//

        export function Undefined ( ): string {
            return '';
        }

    //
	// ─── SAY TEXT ───────────────────────────────────────────────────────────────────
	//

        export function String ( input: string ): string {
            return `<div class="say-string">"${ input }"</div>`;
        } 

    //
	// ─── NUMBER ─────────────────────────────────────────────────────────────────────
	//

        export function Number ( input: number ): string {
            return `<div class"">${ input.toString( ) }</div>`;
        }

    //
	// ─── ARRAY ──────────────────────────────────────────────────────────────────────
	//

        export function Array ( input: Array<number> ) {
            // indexs 
            let indexRow = '';
            for ( let index = 0; index < input.length; index++ ) {
                indexRow += `<td>${ index.toString( ) }</td>`;
            }
            let arrayHTML = `<tr class="say-array-indexes">${ indexRow }</tr>`;
            // cells
            let cellRow = '';
            for ( let index = 0; index < input.length; index++ ) {
                cellRow += `<td class="say-array-cells">${ input[ index ] }</td>`;
            }
            // done
            return `<table>${ indexRow }${ cellRow }</table>`;
        }

    //
	// ─── MATRIX ─────────────────────────────────────────────────────────────────────
	//

        export function Matrix ( input: number[ ][ ] ) {
            let matrixHTML = '';
            for ( let rowCounter = 0; rowCounter < input.length; rowCounter++ ) {
                let row = input[ rowCounter ];
                let rowHTML = ''
                for ( let cloumnCounter = 0; cloumnCounter < row.length; cloumnCounter++ ) {
                    let cell = row[ cloumnCounter ];
                    rowHTML += `<td>${ cell }</td>`
                }
                matrixHTML += `<tr>${ rowHTML }</tr>`
            }
            return `<table class="say-matrix">${ matrixHTML}</table>`
        }

    //
	// ─── OBJECT ─────────────────────────────────────────────────────────────────────
	//

        export function Object ( input: Object ): string {
            return `<div class="notebook-object">${ input.toString() }</div>`;
        }

    // ────────────────────────────────────────────────────────────────────────────────

}