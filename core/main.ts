
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/**
 * **Kary Graph** - A full featured Graph Theory Studio
 */
module KaryGraph {

    //
    // ─── INIT ───────────────────────────────────────────────────────────────────────
    //

        /** 
         *  "T H E   W H O L E   W O R L D   **_S T A R T S_**   F R O M   H E R E"
         */
        export function INIT ( ) {
            InitScreenInformation( );
            UI.Programmer.INIT( );
            RenderStartingGraph( );
        }

    //
    // ─── INIT GRAPH SCRIPT ──────────────────────────────────────────────────────────
    //

        /** 
         * A simple script that happens at start of the software so that
         * user has something to see...
         */
        function RenderStartingGraph ( ) {
            // Just remember this is the only place that using API 
            // inside namespace "KaryGraph" is acceptable...
            let numberOfDots = 90;
            newdots( numberOfDots );
            connect( range( 1, numberOfDots ) );
            Rendering.RenderSpiral( );
        }

    // ────────────────────────────────────────────────────────────────────────────────

}

