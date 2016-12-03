
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

namespace Graph.UI.ProgrammerTab {

    //
    // ─── GLOBALS ────────────────────────────────────────────────────────────────────
    //

        export var Editor: monaco.editor.IStandaloneCodeEditor;

    //
    // ─── INIT MONACO ────────────────────────────────────────────────────────────────
    //

        export function ApplyAdditionalMonacoInitialization ( ) {
            KaryFoundation.Monaco.AddSupportingMonacoTools( Editor );
            SetSampleCode( );
        }

    //
    // ─── ADD COMMENT BUTTONS ────────────────────────────────────────────────────────
    //

        export function OnAddSectionCommentButtonClicked ( ) {
            KaryFoundation.Monaco.ExecuteAddComment( Editor, KaryFoundation.Comment.Style.Section );
            Editor.focus( );
        }

        export function OnAddEndingCommentButtonClicked ( ) {
            KaryFoundation.Monaco.ExecuteAddComment( Editor, KaryFoundation.Comment.Style.Ending );
            Editor.focus( );
        }

    //
    // ─── GENERATE SAMPLE CODE ───────────────────────────────────────────────────────
    //

        function SetSampleCode ( ) {
            let sampleCode = [
                '',
                generateSectionComment('welcome'),
                ' ',
                '    // Hello there! Welcome to Graph!',
                '    // it really is easy to code for graph, all you need is some',
                '    // sweet portion of javascript and a one time checking out at',
                '    // this API documentation:',
                '    // https://github.com/karyfoundation/graph/wiki/API',
                '',
                '    let size = 10;',
                '    newdots( size );',
                '    for ( let i = 0; i < size; i++ ) {',
                '        connect([ rnd( size ), rnd( size ) ]);',
                '    }',
                '',
                generateLineComment( )
            ].join('\n');

            Editor.setValue( sampleCode );
        }

    //
    // ─── GENERATE SECTION COMMENT ───────────────────────────────────────────────────
    //

        function generateSectionComment ( text: string ) {
            return KaryFoundation.Comment.Generate(
                KaryFoundation.Comment.Style.Section,
                '//', 4, true, text
            ).trim( );
        }

    //
    // ─── GENERATE LINE COMMENT ──────────────────────────────────────────────────────
    //

        function generateLineComment ( ) {
            return KaryFoundation.Comment.Generate(
                KaryFoundation.Comment.Style.Ending,
                '//', 4, true, ''
            )
        }

    // ────────────────────────────────────────────────────────────────────────────────

}