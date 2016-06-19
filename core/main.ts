
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
            InitScreenInformation( );
            UI.Programmer.INIT();

            //Dot.DisplayNumberLabels = false;
            // var selection = new SelectionBox( 800, 100 );

            API.StandardLibrary.CreateCompleteGraph( 20 );
            Rendering.RenderCircluar();
        }

    // ────────────────────────────────────────────────────────────────────────────────

}

