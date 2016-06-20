
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
                    return SayImplementations.Text( <string> input );

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
            return '<div>:D</div>'
        }

    //
	// ─── SAY TEXT ───────────────────────────────────────────────────────────────────
	//

        export function Text ( input: string ): string {
            return `<div class="">'${ input }'</div>`;
        } 
    
    //
	// ─── NUMBER ─────────────────────────────────────────────────────────────────────
	//

        export function Number ( input: number ) {
            return `<div class"">${ input.toString( ) }</div>`;
        }

    //
	// ─── OBJECT ─────────────────────────────────────────────────────────────────────
	//

        export function Object ( input: Object ) {
            return `<div class="">${ input.toString() }</div>`;
        }

    // ────────────────────────────────────────────────────────────────────────────────

}