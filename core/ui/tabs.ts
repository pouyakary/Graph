
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph.UI.Tabs {

    //
    // ─── ENUMS ──────────────────────────────────────────────────────────────────────
    //

        enum ETabs { Editor, Programmer };

    //
    // ─── TABS ON CLICK ──────────────────────────────────────────────────────────────
    //

        export function EditorTabsOnClick ( ) {
            ChangeToTab( ETabs.Editor );
        }

        export function ProgrammerTabsOnClick ( ) {
            ChangeToTab( ETabs.Programmer );
        }

    //
    // ─── CHANGE TO TAB ──────────────────────────────────────────────────────────────
    //

        function ChangeToTab ( tab: ETabs ) {
            let tabContainer = <HTMLDivElement> document.getElementById( TabsContainer );
            let programmerTabView = document.getElementById( ProgrammerTabId );
            let editorTabView = document.getElementById( EditorTabId );

            let ribbon = <HTMLDivElement> document.getElementById( 'ribbon' );
            let ribbonEditor = document.getElementById( EditorRibbonIconsId );
            let ribbonProgrammer = document.getElementById( ProgrammerRibbonIconsId );

            switch ( tab ) {
                case ETabs.Editor:
                    tabContainer.className = 'editor-tab';
                    ribbon.className = 'ribbon-editor';
                    editorTabView.hidden = false;
                    programmerTabView.hidden = true;
                    ribbonEditor.hidden = false;
                    ribbonProgrammer.hidden = true;
                    break;

                case ETabs.Programmer:
                    tabContainer.className = 'programmer-tab';
                    ribbon.className = 'ribbon-programmer';
                    editorTabView.hidden = true;
                    programmerTabView.hidden = false;
                    ribbonEditor.hidden = true;
                    ribbonProgrammer.hidden = false;
                    break;
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}