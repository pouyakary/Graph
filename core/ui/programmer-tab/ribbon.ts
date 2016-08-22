
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

namespace KaryGraph.UI.ProgrammerTab.Ribbon {

    //
    // ─── ON RUN BUTTON CLICKED ──────────────────────────────────────────────────────
    //

        /** Run Button */
        export function OnRunButtonClicked ( ) {
            let runResult = ScriptEngine.Run(
                UI.ProgrammerTab.Editor.getValue( )
            );
            UI.Tabs.EditorTabsOnClick( );
            if ( !runResult.success ) {
                alert( runResult.error );
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}