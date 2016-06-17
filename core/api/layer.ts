
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/**
 * This is a very importantn module. It provides an 
 * ***abstraction layer*** over the main `KaryGraph`
 * to create a ***simple functional*** layer over for 
 * the API to reduce complexity when scripting
 */

module KaryGraph.AbstractionLayer {

    //
	// ─── ADD NEW DOT ────────────────────────────────────────────────────────────────
	//

        /**
         * Generates a new random dot on the screen
         */
        export function AddNewDot( ): Dot {
            let padding = 20;
            let x = padding + Random( GraphWidth - ( 2 * padding ) );
            let y = padding + Random( GraphHeight - ( 2 * padding ) );
            return NewDotAt( x, y );
        }
        
    //
	// ─── NEW DOT AT ─────────────────────────────────────────────────────────────────
	//

        export function NewDotAt ( x: number, y: number ) {
            let dot = new Dot( x, y );
            Graph[ dot.Id ] = dot;
            return dot;
        }

    //
	// ─── GET DOT BY NUMBER ID ───────────────────────────────────────────────────────
	//

        export function GetDotByNumberId( numberId: number ): Dot {
            let dot: Dot;
            let keys = Object.keys( Graph );
            keys.forEach( key => {
                if ( ( <Dot> Graph[ key ] ).GetNumberId( ) == numberId ) {
                    dot = Graph[ key ];
                    return;
                }
            });
            return dot;
        }

    //
	// ─── CLEAR SCREEN ───────────────────────────────────────────────────────────────
	//

        export function ClearScreen( ) {
            let keys = Object.keys( Graph );
            keys.forEach( key => {
                ( <Dot> Graph[ key ] ).Remove( );
            });
        }

    //
	// ─── COUNT OF DOTS ──────────────────────────────────────────────────────────────
	//

        export function GetCountOfDots( ): number {
            return Object.keys( Graph ).length;
        }

    // ────────────────────────────────────────────────────────────────────────────────

}