
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph.UI.ProgrammerTab.Ribbon {

    //
    // ─── ON RUN BUTTON CLICKED ──────────────────────────────────────────────────────
    //

        /** Run Button */
        export function OnRunButtonClicked ( ) {
            KaryGraph.ScriptEngine.Run(
                UI.ProgrammerTab.Editor.getValue( )
            );
            UI.Tabs.EditorTabsOnClick( );
        }

    // ────────────────────────────────────────────────────────────────────────────────

}