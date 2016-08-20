
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryFoundation.Monaco {

    //
    // ─── MAIN ───────────────────────────────────────────────────────────────────────
    //

        export function AddSupportingMonacoTools ( editor: monaco.editor.IStandaloneCodeEditor ) {
            AddSectionCommentCommand( editor );
            AddLineCommentCommand( editor );
        }


    //
    // ─── CONSTANTS ──────────────────────────────────────────────────────────────────
    //

        const lineFormat = /^\s*([a-z ]|[0-9][0-9\.]*)+\s*$/i;

    //
    // ─── ADD KARY SECTION COMMENT COMMAND ───────────────────────────────────────────
    //

        function AddSectionCommentCommand ( editor: monaco.editor.IStandaloneCodeEditor ) {
            editor.addAction({
                id: 'kary-comment-insert-section-comment',
                label: 'Insert Section Comment',
                keybindings: [ monaco.KeyMod.Alt | monaco.KeyCode.KEY_Y ],
                keybindingContext: null,
                enablement: {
                    textFocus: true
                },

                run: function ( ed ) {
                    ExecuteAddComment( ed, Comment.Style.Section );
                    return null;
                }
            });
        }

    //
    // ─── ADD KARY LINE COMMENT COMMAND ──────────────────────────────────────────────
    //

        function AddLineCommentCommand ( editor: monaco.editor.IStandaloneCodeEditor ) {
            editor.addAction({
                id: 'kary-comment-insert-line-comment',
                label: 'Insert Line Comment',
                keybindings: [ monaco.KeyMod.Alt | monaco.KeyCode.KEY_L ],
                keybindingContext: null,
                enablement: {
                    textFocus: true
                },

                run: function ( ed ) {
                    ExecuteAddComment( ed, Comment.Style.Ending );
                    return null;
                }
            });
        }

    //
    // ─── ADD COMMENT TO MONACO ──────────────────────────────────────────────────────
    //

        export function ExecuteAddComment ( editor: monaco.editor.ICommonCodeEditor, 
                                             style: Comment.Style ) {

            if ( Comment.Style.Section === style ) {
                makeCommentWithFormula( editor, line => {
                    return Comment.Generate(
                        Comment.Style.Section,
                        '//', 4, true, line
                    )
                });
            } else {
                makeCommentWithFormula( editor, line => {
                    return Comment.Generate(
                        Comment.Style.Ending,
                        '//', 4, true, line
                    )
                });
            }
        }

    //
    // ─── MAKE COMMENT WITH FORMULA ──────────────────────────────────────────────────
    //

        function makeCommentWithFormula ( ed: monaco.editor.ICommonCodeEditor,
                                            formula: ( line: string ) => string ) {
            
            // env info
            let position = ed.getPosition( ); 
            let line = getLine( ed.getValue( ), position.lineNumber );
            
            // running generator
            let comment = formula( line );

            // performing the replace
            replaceComment( ed, comment, line.length + 1, position.lineNumber );
            cancelSelection( ed );
        }

    //
    // ─── REPLACE COMMENT ────────────────────────────────────────────────────────────
    //

        function replaceComment ( ed: monaco.editor.ICommonCodeEditor,
                             comment: string,
                          lineLength: number,
                          lineNumber: number ) {

            ed.executeEdits( "org.karyfoundation.comment-monaco", [{
                identifier: { 
                    major: 0, 
                    minor: 0 
                },

                range: new monaco.Range( 
                    lineNumber, 0, 
                    lineNumber, lineLength 
                ),

                text: comment,
                forceMoveMarkers: false
            }]);

        }

    //
    // ─── CANCEL SELECTION ───────────────────────────────────────────────────────────
    //

        function cancelSelection ( ed: monaco.editor.ICommonCodeEditor ) {
            let endingPosition = ed.getPosition( );
            ed.setSelection({
                startLineNumber: endingPosition.lineNumber,
                startColumn: endingPosition.column,
                endLineNumber: endingPosition.lineNumber,
                endColumn: endingPosition.column,
            });
        }

    //
    // ─── GET LINE ───────────────────────────────────────────────────────────────────
    //

        function getLine ( text: string, line: number ): string {
            return text.split('\n')[ line - 1 ];
        }

    // ────────────────────────────────────────────────────────────────────────────────

}
