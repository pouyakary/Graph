
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph.API.StandardLibrary {

    //
	// ─── RND ────────────────────────────────────────────────────────────────────────
	//

        export function RND( ) {
            
        }

    //
	// ─── COMPLETE GRAPH ─────────────────────────────────────────────────────────────
	//

        export function CreateCompleteGraph( size: number ) {
            let dots = new Array<Dot>( );
            // creating dots
            for ( var counter = 0; counter < size; counter++ ) {
                dots.push( KaryGraph.API.AbstractionLayer.AddNewDot( ) );
            }
            // connecting
            dots.forEach( dot => {
                for ( var index = 0; index < size; index++ ) {
                    var cdot = dots[ index ];
                    if ( cdot != dot ) {
                        dot.ConnectTo( cdot );
                    }
                }
            });
        }

    // ────────────────────────────────────────────────────────────────────────────────

}