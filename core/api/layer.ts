
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/**
 * This is a very important module. It provides an
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

        export function GetDotByDotOrId ( dotOrId: DotObjectOrDotID ): Dot {
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
        export function AddNewDot ( ): Dot {
            let x = 20 + Random( GraphWidth - 40 );
            let y = 20 + Random( GraphHeight - 40 );
            return new Dot( x, y );
        }

    //
    // ─── GET DOT BY NUMBER ID ───────────────────────────────────────────────────────
    //

        export function GetDotByNumberId ( numberId: number ): Dot {
            let dot: Dot;
            let keys = Object.keys( Storage.Nodes );
            keys.forEach( key => {
                if ( ( <Dot> Storage.Nodes[ key ] ).GetNumberId( ) == numberId ) {
                    dot = Storage.Nodes[ key ];
                    return;
                }
            });
            return dot;
        }

    //
    // ─── GET NUMBER OF VERTICES WITH ODD DEGREE ─────────────────────────────────────
    //

        export function NumberOfOddVertices ( ): number {
            var verticesWithOddDegree: number = 0;
            var keys = Object.keys( Storage.Nodes );
            keys.forEach( key => {
                if ( ( <Dot> Storage.Nodes[ key ] ).GetDegree() % 2 ) {
                    verticesWithOddDegree++;
                }
            });
            return verticesWithOddDegree;
        }

    //
    // ─── CLEAR SCREEN ───────────────────────────────────────────────────────────────
    //

        export function Reset ( ) {
            Object.keys( Storage.Nodes ).forEach(
                key => ( <Dot> Storage.Nodes[ key ] ).Remove( )
            );
            Dot.ResetNumberIdPlace( );
        }

    //
    // ─── CREATE MATRIX OF GRAPH ────────────────────────────────────────────────────
    //

        export function CreateMatrix ( idOrDots: Array<DotObjectOrDotID> ): number[ ][ ] {
            var idsLength = idOrDots.length;
            var matrix: number[ ][ ] = new Array( idsLength );

            for ( let row = 0; row < idsLength; row++ ) {
                matrix[ row ] = new Array( idsLength );
                var d1 = GetDotByDotOrId( idOrDots[ row ] );

                for ( let column = 0; column < idsLength; column++ ) {
                    let d2 = GetDotByDotOrId( idOrDots[ column ] );
                    matrix[ row ][ column ] = + d1.IsConnectedTo( d2 );
                }
            }

            return matrix;
        }

    //
    // ─── RENDERING ──────────────────────────────────────────────────────────────────
    //

        export function Render ( text: string ) {
            switch ( text ) {
                case 'circle':
                    Rendering.RenderCircular();
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
