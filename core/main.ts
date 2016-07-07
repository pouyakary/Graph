
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
            UI.Programmer.INIT( );
            RenderStartingGraph( );
        }

    //
    // ─── INIT GRAPH SCRIPT ──────────────────────────────────────────────────────────
    //

        function RenderStartingGraph ( ) {
            Dot.DisplayNumberLabels = false;
            let numberOfDots = 90;
            newdots( numberOfDots );
            connect( range( 1, numberOfDots ) );
            Rendering.RenderSpiral( );
        }

    // ────────────────────────────────────────────────────────────────────────────────

}

