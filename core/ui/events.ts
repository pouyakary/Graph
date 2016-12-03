

//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

namespace Graph.UI.Events {

    //
    // ─── WINDOW RESIZE ──────────────────────────────────────────────────────────────
    //

        window.onresize = event => {
            ProgrammerTab.Editor.layout( );
        };

    // ────────────────────────────────────────────────────────────────────────────────

}