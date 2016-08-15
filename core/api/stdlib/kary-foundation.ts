
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph.API.KaryFoundation {

    //
    // ─── THE KARY GRAPH ─────────────────────────────────────────────────────────────
    //

        export function CreateKaryHorseGraph ( ) {
            let height = AbstractionLayer.GetGraphViewHeight( );
            let width = AbstractionLayer.GetGraphViewWidth( );

            function createDotWithCoordinatesFromOrigin ( x: number, y: number ) {
                newdotat( ( width / 2 ) + x, ( height / 2 ) + y);
            }

            createDotWithCoordinatesFromOrigin( -185 , -51  ); // 1
            createDotWithCoordinatesFromOrigin( -103 , -142 ); // 2
            createDotWithCoordinatesFromOrigin( -65  ,  5   ); // 3  
            createDotWithCoordinatesFromOrigin(  118 ,  5   ); // 4
            createDotWithCoordinatesFromOrigin(  161 ,  -44 ); // 5
            createDotWithCoordinatesFromOrigin( -139 ,  135 ); // 6
            createDotWithCoordinatesFromOrigin( -6   ,  135 ); // 7
            createDotWithCoordinatesFromOrigin(  48  ,  135 ); // 8
            createDotWithCoordinatesFromOrigin(  181 ,  135 ); // 9

            connect(range(1, 5));
            connect([6, 3, 7]);
            connect([8, 4, 9]);
        }
    
    // ────────────────────────────────────────────────────────────────────────────────

}