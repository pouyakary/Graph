
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

namespace KaryGraph.API.KaryFoundation {

    //
    // ─── THE KARY GRAPH ─────────────────────────────────────────────────────────────
    //

        /**
         * Pretty fun easter that generates a Kary Horse Logo with exact
         * properties as the real logo in the center of the screen.
         */
        export function CreateKaryHorseGraph ( ) {
            // screen sizes
            const height = AbstractionLayer.GetGraphViewHeight( );
            const width = AbstractionLayer.GetGraphViewWidth( );

            /** Creates a function  */
            function createFromOrigin ( x: number, y: number ): Dot {
                return newdotat( ( width / 2 ) + x, ( height / 2 ) + y);
            }

            /** Where the dots are saved. */
            let dots = new Array<Dot>( 9 );

            // Creating dots
            dots[ 0 ] = createFromOrigin( -185 , -51  ); // 1
            dots[ 1 ] = createFromOrigin( -103 , -142 ); // 2
            dots[ 2 ] = createFromOrigin( -65  ,  5   ); // 3
            dots[ 3 ] = createFromOrigin(  118 ,  5   ); // 4
            dots[ 4 ] = createFromOrigin(  161 ,  -44 ); // 5
            dots[ 5 ] = createFromOrigin( -139 ,  135 ); // 6
            dots[ 6 ] = createFromOrigin( -6   ,  135 ); // 7
            dots[ 7 ] = createFromOrigin(  48  ,  135 ); // 8
            dots[ 8 ] = createFromOrigin(  181 ,  135 ); // 9

            // Connecting
            connect([ dots[ 0 ], dots[ 1 ], dots[ 2 ], dots[ 3 ], dots[ 4 ] ]);
            connect([ dots[ 5 ], dots[ 2 ], dots[ 6 ]]);
            connect([ dots[ 7 ], dots[ 3 ], dots[ 8 ]]);
        }

    // ────────────────────────────────────────────────────────────────────────────────

}