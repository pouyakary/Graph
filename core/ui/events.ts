

//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph.UI.Events {

    //
    // ─── WINDOW RESIZE ──────────────────────────────────────────────────────────────
    //

        window.onresize = event => {
            KaryGraph.UI.ProgrammerTab.Editor.layout( );
        };
    
    // ────────────────────────────────────────────────────────────────────────────────
    
}