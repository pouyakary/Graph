
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Micha Hanselmann <m@karyfoundation.org>
//

namespace KaryGraph.API.StandardLibrary.Sortings {

    //
    // ─── CLASSIC TREE ───────────────────────────────────────────────────────
    //

        export function Tree ( ): boolean {

            // vars
            var map = new Map( );
            var keys = Object.keys( Storage.Nodes );
            var layers: number = 0;

            // create tree map
            keys.forEach( key => {
                var dot = <Dot> Storage.Nodes[ key ];
                if ( dot.NumberOfInputs( ) == 0 ) {
                    var children = dot.GetChildren( );
                    if ( children == -1 ) return false;
                    map.set( dot, children );
                }
            });

            // count layers
            function dive ( map: any, layer: number ) {
                if (layer > layers) layers = layer;
                for ( var [ key, value ] of map.entries() ) {
                    if ( value.size > 0 ) dive( value, layer + 1 );
                }
            }
            dive( map, 1 );

            // move dots
            function moveDots ( map: any, width: number, positionY: number, xOff: number ) {
                var count = map.size;
                var x = 0;
                for ( var [ key, value ] of map.entries( ) ) {
                    var positionX = width / count * x++ + (width / count / 2) + xOff;
                    ( <Dot> key ).MoveTo( positionX, positionY );
                    if ( value.size > 0 ) {
                        moveDots(
                            value,
                            width / count,
                            positionY + GraphHeight / layers,
                            positionX - (width / count / 2 )
                        );
                    }
                }
            }

            moveDots(
                map,
                GraphWidth,
                GraphHeight / layers - ( GraphHeight / layers / 2 ),
                0
            );

            return true;
        }

    // ────────────────────────────────────────────────────────────────────────

}
