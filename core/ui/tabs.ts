
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph.UI.Tabs {

    //
    // ─── ENUMS ──────────────────────────────────────────────────────────────────────
    //

        enum TabOptions { Editor, Programmer, Algorithms };

    //
    // ─── TABS ON CLICK ──────────────────────────────────────────────────────────────
    //

        export function EditorTabsOnClick ( ) {
            ChangeToTab( TabOptions.Editor );
        }

        export function ProgrammerTabsOnClick ( ) {
            ChangeToTab( TabOptions.Programmer );
        }

        export function AlgorithmsTabsOnClick ( ) {
            ChangeToTab( TabOptions.Algorithms );
        }

    //
    // ─── CHANGE TO TAB ──────────────────────────────────────────────────────────────
    //

        function ChangeToTab ( tab: TabOptions ) {
            let tabContainer = <HTMLDivElement> document.getElementById( TabsContainer );

            // editor tab
            let editorTabView = document.getElementById( EditorTabId );
            let programmerTabView = document.getElementById( ProgrammerTabId );
            let algorithmsTabView = document.getElementById( AlgorithmsTabId );

            // switcher
            switch ( tab ) {
                // Editor
                case TabOptions.Editor:
                    tabContainer.className = 'editor-tab';

                    editorTabView.hidden = false;
                    programmerTabView.hidden = true;
                    algorithmsTabView.hidden = true;
                    break;

                
                // Programmer
                case TabOptions.Programmer:
                    tabContainer.className = 'programmer-tab';

                    editorTabView.hidden = true;
                    programmerTabView.hidden = false;
                    algorithmsTabView.hidden = true;
                    break;


                // Preferences
                case TabOptions.Algorithms:
                    tabContainer.className = 'preferences-tab';

                    editorTabView.hidden = true;
                    programmerTabView.hidden = true;
                    algorithmsTabView.hidden = false;
                    break;
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}