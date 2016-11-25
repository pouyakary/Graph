
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

namespace KaryGraph.API.StandardLibrary {

    //
    // ─── COMPLETE GRAPH ─────────────────────────────────────────────────────────────
    //

        export function CreateCompleteGraph ( size: number ) {
            let keys = new Array<string>( );

            // creating dots
            for ( var counter = 0; counter < size; counter++ )
                keys.push( API.AbstractionLayer.AddNewDot( ).Id );

            // connecting
            keys.forEach( key => {
                for ( var index = 0; index < size; index++ ) {
                    var currentDot = keys[ index ];
                    if ( currentDot !== key )
                        Storage.Nodes[ key ].ConnectTo( Storage.Nodes[ keys[ index ] ] );
                }
            });
        }

    //
    // ─── RND ────────────────────────────────────────────────────────────────────────
    //

        export function RND ( ) {

        }

    // ────────────────────────────────────────────────────────────────────────────────

}