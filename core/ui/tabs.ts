
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph.UI.Tabs {

    //
    // ─── ENUMS ──────────────────────────────────────────────────────────────────────
    //

        enum TabOptions { Editor, Programmer, Preferences };

    //
    // ─── TABS ON CLICK ──────────────────────────────────────────────────────────────
    //

        export function EditorTabsOnClick ( ) {
            ChangeToTab( TabOptions.Editor );
        }

        export function ProgrammerTabsOnClick ( ) {
            ChangeToTab( TabOptions.Programmer );
        }

        export function PreferencesTabsOnClick ( ) {
            ChangeToTab( TabOptions.Preferences );
        }

    //
    // ─── CHANGE TO TAB ──────────────────────────────────────────────────────────────
    //

        function ChangeToTab ( tab: TabOptions ) {
            let tabContainer = <HTMLDivElement> document.getElementById( TabsContainer );
            let ribbon = <HTMLDivElement> document.getElementById( 'ribbon' );

            // editor tab
            let editorTabView = document.getElementById( EditorTabId );
            let ribbonEditor = document.getElementById( EditorRibbonIconsId );

            // programer tab
            let programmerTabView = document.getElementById( ProgrammerTabId );
            let ribbonProgrammer = document.getElementById( ProgrammerRibbonIconsId );

            // programer tab
            let preferencesTabView = document.getElementById( PreferencesTabId );
            let ribbonPreferences = document.getElementById( PreferencesRibbonIconsId );

            // switcher
            switch ( tab ) {
                // Editor
                case TabOptions.Editor:
                    tabContainer.className = 'editor-tab';
                    ribbon.className = 'ribbon-editor';

                    editorTabView.hidden = false;
                    ribbonEditor.hidden = false;

                    programmerTabView.hidden = true;
                    ribbonProgrammer.hidden = true;

                    preferencesTabView.hidden = true;
                    ribbonPreferences.hidden = true;
                    break;

                
                // Programmer
                case TabOptions.Programmer:
                    tabContainer.className = 'programmer-tab';
                    ribbon.className = 'ribbon-programmer';

                    editorTabView.hidden = true;
                    ribbonEditor.hidden = true;

                    programmerTabView.hidden = false;
                    ribbonProgrammer.hidden = false;

                    preferencesTabView.hidden = true;
                    ribbonPreferences.hidden = true;
                    break;


                // Preferences
                case TabOptions.Preferences:
                    tabContainer.className = 'preferences-tab';
                    ribbon.className = 'ribbon-preferences';

                    editorTabView.hidden = true;
                    ribbonEditor.hidden = true;

                    programmerTabView.hidden = true;
                    ribbonProgrammer.hidden = true;

                    preferencesTabView.hidden = false;
                    ribbonPreferences.hidden = false;
                    break;
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}