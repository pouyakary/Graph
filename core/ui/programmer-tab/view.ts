
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph.UI.ProgrammerTab {

    //
    // ─── GLOBALS ────────────────────────────────────────────────────────────────────
    //

        export var Editor: monaco.editor.IStandaloneCodeEditor;

    //
    // ─── INIT MONACO ────────────────────────────────────────────────────────────────
    //

        export function ApplyAdditionalMonacoInitialization ( ) {
            KaryFoundation.Monaco.AddSupportingMonacoTools( Editor );
        }

    // ────────────────────────────────────────────────────────────────────────────────

}