
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

module KaryGraph.API.AbstractionLayer {

    //
	// ─── TYPES ──────────────────────────────────────────────────────────────────────
	//

        export type DotObjectOrDotID = Dot | number;

    //
	// ─── DOT BY DOT OR ID ───────────────────────────────────────────────────────────
	//

        export function DotByDotOrId( dotOrId: DotObjectOrDotID ): Dot {
            if ( typeof ( dotOrId ) === "number" ) {
                return GetDotByNumberId( <number> dotOrId );
            } else {
                return <Dot> dotOrId;
            }
        }


    //
	// ─── ADD NEW DOT ────────────────────────────────────────────────────────────────
	//

        /**
         * Generates a new random dot on the screen
         */
        export function AddNewDot( ): Dot {
            let x = 20 + Random( GraphWidth - 40 );
            let y = 20 + Random( GraphHeight - 40 );
            return new Dot( x, y );
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
	// ─── GET NUMBER OF VERTICES WITH ODD DEGREE ─────────────────────────────────────
	//

        export function NumberOfOddVertices( ): number {
            var verticesWithOddDegree: number = 0;
            var keys = Object.keys( Graph );
            keys.forEach( key => {
              if ( ( <Dot> Graph[ key ] ).GetDegree() % 2 ) verticesWithOddDegree++;
            });
            return verticesWithOddDegree;
        }

    //
	// ─── CLEAR SCREEN ───────────────────────────────────────────────────────────────
	//

        export function Reset( ) {
            Dot.ResetNumberIdPlace( );
            let keys = Object.keys( Graph );
            keys.forEach( key => {
                ( <Dot> Graph[ key ] ).Remove( );
            });
        }
        
    //
    // ─── CREATE MATRIX OF GRAPH ────────────────────────────────────────────────────
    //

        export function CreateMatrix( ): number[][] {
            var matrix: number[ ][ ] = new Array( KaryGraph.Dot.TotalDots );
            for ( var m = 0; m < matrix.length; m++ ) {
                matrix[ m ] = new Array( KaryGraph.Dot.TotalDots );
                for ( var n = 0; n < matrix[ m ].length; n++ ) {
                    matrix[ m ][ n ] = + ( GetDotByNumberId( m + 1 ).IsConnectedTo( GetDotByNumberId( n + 1 ) ) );
                }
            }

            return matrix;
        }

    //
	// ─── RENDERING ──────────────────────────────────────────────────────────────────
	//

        export function Render( text: string ) {
            switch ( text ) {
                case 'circle':
                    Rendering.RenderCircluar();
                    break;
                case 'spiral':
                    Rendering.RenderSpiral();
                    break;
                case 'order':
                    KaryGraph.API.StandardLibrary.Sortings.Tree( );
                    break;
                default:
                    // UI.Console.PrintError(`Graph API: No rendering option ${text}`);
                    break;
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}
