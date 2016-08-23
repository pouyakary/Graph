
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/**
 * Programmer's ***Notebook View*** must have different ways to
 * show that view. this namespace implements different systems for
 * the say.
 */


namespace KaryGraph.UI.Programmer {

    //
    // ─── SAY MAIN ───────────────────────────────────────────────────────────────────
    //

        export function GenerateSayHTML ( input: any ): string {

            // if were going to have an undefined type.
            if ( input == undefined ) {
                return SayImplementations.SayUndefined( );
            }

            // number
            if ( typeof( input ) === "number" ) {
                return SayImplementations.SayNumber( input );
            }

            // if we have type
            switch ( input.constructor.name ) {

                case "Dot":
                    return SayImplementations.SayDot( input );

                case "String":
                    return SayImplementations.SayString( input );

                case "Array":
                    if ( input[ 0 ].constructor.name == "Array" ) {
                        // Matrix
                        return SayImplementations.SayMatrix( input );
                    } else {
                        // Normal Array
                        return SayImplementations.SayArray( input );
                    }

                default:
                    return SayImplementations.SayObject( input );
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}




namespace KaryGraph.UI.Programmer.SayImplementations {

    //
    // ────────────────────────────────────────────────────────────────────────────── I ──────────
    //  :::::: S A Y   I M P L E M E N T A T I O N S : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────────────────────
    //

    //
    // ─── DOT ────────────────────────────────────────────────────────────────────────
    //

        export function SayDot ( input: Dot ): string {
            return (
                `<div><div class="say-dot">${ input.GetNumberId( ) }</div>` +
                '<div class="say-dot-dot"></div></div>'
            );
        }

    //
    // ─── UNDEFINED ──────────────────────────────────────────────────────────────────
    //

        export function SayUndefined ( ): string {
            return '';
        }

    //
    // ─── SAY TEXT ───────────────────────────────────────────────────────────────────
    //

        export function SayString ( input: string ): string {
            return `<div class="say-string">"${ input }"</div>`;
        }

    //
    // ─── NUMBER ─────────────────────────────────────────────────────────────────────
    //

        export function SayNumber ( input: number ): string {
            return `<span class="say-number">${ input }</span>`;
        }

    //
    // ─── ARRAY ──────────────────────────────────────────────────────────────────────
    //

        export function SayArray ( input: Array<number> ) {
            let row = '';
            for ( let index = 0; index < input.length; index++ ) {
                row += ( `<td class="say-array-cell">` +
                         `<div class="say-array-index">${ index }</div>`  +
                         `<div class="say-array-value">${ ArraySayEncoder( input[ index ] ) }<div>` +
                         '</td>' );
            }
            return `<table class="say-array"><tr>${ row }</tr></table>`;
        }

    //
    // ─── MATRIX ─────────────────────────────────────────────────────────────────────
    //

        export function SayMatrix ( input: number[ ][ ] ) {
            let matrixHTML = '';
            for ( let rowCounter = 0; rowCounter < input.length; rowCounter++ ) {
                let row = input[ rowCounter ];
                let rowHTML = ''
                for ( let columnCounter = 0; columnCounter < row.length; columnCounter++ ) {
                    let cell = row[ columnCounter ];
                    rowHTML += `<td>${ cell }</td>`
                }
                matrixHTML += `<tr>${ rowHTML }</tr>`
            }
            return `<div class="say-matrix"><table>${ matrixHTML}</table></div>`
        }

    //
    // ─── OBJECT ─────────────────────────────────────────────────────────────────────
    //

        export function SayObject ( input: Object ): string {
            return `<div class="notebook-object">${ input.toString() }</div>`;
        }

    // ────────────────────────────────────────────────────────────────────────────────





    //
    // ────────────────────────────────────────────────── I ──────────
    //  :::::: T O O L S : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────
    //

    //
    // ─── ARRAY SWITCHER ─────────────────────────────────────────────────────────────
    //

        function ArraySayEncoder( input: any ): string {
            if ( typeof( input ) === "number" ) {
                return SayNumber( input );
            }

            switch ( input.constructor.name ) {
                case "Dot":
                    return SayDot( input );
                case "String":
                    return SayString( input );
                default:
                    return input;
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}