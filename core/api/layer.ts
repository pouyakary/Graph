
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
	// ─── COUNT OF DOTS ──────────────────────────────────────────────────────────────
	//

        export function GetCountOfDots( ): number {
            return Object.keys( Graph ).length;
        }

    //
    // ─── CREATE MATRIX OF GRAPH ────────────────────────────────────────────────────
    //

        export function CreateMatrix( ): number[][] {
            var matrix: number[ ][ ] = new Array( GetCountOfDots( ) );
            for ( var m = 0; m < matrix.length; m++ ) {
                matrix[ m ] = new Array( GetCountOfDots( ) );
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
                case 'order':
                    SortByInputs();
                    break;
                default:
                    // UI.Console.PrintError(`Graph API: No rendering option ${text}`);
                    break;
            }
        }

    //
	// ─── SORT BY INPUTS ─────────────────────────────────────────────────────────────
	//

        export function SortByInputs( ) {
            var map = new Map( );
            var keys = Object.keys( Graph );
            var layers: number = 0;
            keys.forEach( key => {
                var dot = <Dot> Graph[ key ];
                if ( dot.NumberOfInputs( ) == 0 ) map.set( dot, dot.GetChildren( ) );
            });
            function dive ( map: any, layer: number ) {
                layers = layer;
                for ( var [ key, value ] of map.entries() ) {
                    if ( value.size > 0 ) dive( value, layer + 1 );
                }
            }
            dive( map, 1 );
            function moveDots ( map: any, width: number, ypos: number, xoff: number ) {
                var count = map.size;
                var x = 0;
                for ( var [ key, value ] of map.entries() ) {
                    var xpos = width / count * x++ + (width / count / 2) + xoff;
                    ( <Dot> key ).MoveTo( xpos, ypos );
                    if ( value.size > 0 ) moveDots( value, width / count, ypos + GraphHeight / layers, xpos - (width / count / 2) );
                }
            }
            moveDots( map, GraphWidth, GraphHeight / layers - ( GraphHeight / layers / 2 ), 0 );
        }

    // ────────────────────────────────────────────────────────────────────────────────

}
