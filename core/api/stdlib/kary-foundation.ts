
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
            newdotat( width / 2, height / 2  );
        }
    
    // ────────────────────────────────────────────────────────────────────────────────

}