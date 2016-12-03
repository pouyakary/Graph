
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Sina Bakhtiari <s@karyfoundation.org>
//

namespace Graph.API.StandardLibrary.Algorithms {

    //
    // ─── BFS ────────────────────────────────────────────────────────────────────────
    //

        export function BFS ( start: Dot, steps: number ) {
            let bfs = new Array<Array<Dot>>( );
            let checked = new Array<Boolean>( );

            for ( let it = 0; it < Graph.Dot.TotalDots; it++ ) {
                checked.push( false );
            }

            let step = 0;
            bfs.push( [ start ] );
            checked[ start.GetNumberId( ) ] = true;

            while ( step < steps || steps == -1 ) {
                let tmp = new Array<Dot>( );

                for ( let it = 0; it < bfs[ bfs.length-1 ].length; it++ ) {
                    let neighbors = bfs[ bfs.length-1 ][ it ].GetNeighbors( );

                    for ( let nit = 0; nit < neighbors.length; nit++ ) {
                        if ( checked[ neighbors[ nit ].GetNumberId( ) ] == false ) {
                            checked[ neighbors[ nit ].GetNumberId( ) ] = true;
                            tmp.push( neighbors[ nit ] );
                        }
                    }
                }

                if ( tmp.length == 0 ) {
                    break;
                }

                bfs.push( tmp ) ;
                step++;
            }

            return bfs;
        }

    // ────────────────────────────────────────────────────────────────────────────────

}
