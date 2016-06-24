
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/**
 * **Kary Graph** - Full featured Graph Theory Studio
 */
module KaryGraph {

    //
    // ─── INIT ───────────────────────────────────────────────────────────────────────
    //

        /** What starts the code when it starts. */
        export function INIT ( ) {
            // init
            InitScreenInformation( );
            UI.Programmer.INIT();
            // creating a demo graph
            API.StandardLibrary.CreateCompleteGraph( 5 );
            Rendering.RenderCircluar();
        }

    // ────────────────────────────────────────────────────────────────────────────────

}

