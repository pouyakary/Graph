
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
            let toolbar = <HTMLDivElement> document.getElementById( 'toolbar' );
            switch ( tab ) {
                case ETabs.Editor:
                    tabContainer.className = 'editor-tab';
                    toolbar.style.borderBottomColor = '#799DC4';
                    break;

                case ETabs.Programmer:
                    tabContainer.className = 'programmer-tab';
                    toolbar.style.borderBottomColor = '#B486A8';
                    break;
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}