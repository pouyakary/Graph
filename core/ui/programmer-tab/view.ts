
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph.UI.ProgrammerTab {

    //
    // ─── INIT ───────────────────────────────────────────────────────────────────────
    //

        export function InitTab ( ) {
            InitMonacoSession( );
        }

    //
    // ─── INIT MONACO ────────────────────────────────────────────────────────────────
    //

        function InitMonacoSession ( ) {
            monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
                noSemanticValidation: false,
                noSyntaxValidation: false
            })

            monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
                target: monaco.languages.typescript.ScriptTarget.ES6,
                allowNonTsExtensions: true
            });

            monaco.languages.typescript.javascriptDefaults.addExtraLib([
                'declare class Facts {',
                '    /**',
                '     * Returns the next fact',
                '     */',
                '    static next():string',
                '}',
            ].join('\n'), 'filename/facts.d.ts');

            var jsCode = [
                '"use strict";',
                '',
                "class Chuck {",
                "    greet() {",
                "        return Facts.next();",
                "    }",
                "}"
            ].join('\n');

            monaco.editor.create( document.getElementById( MonacoPlaceholderDiv ), {
                value: jsCode,
                language: "javascript"
            });
        }

    // ────────────────────────────────────────────────────────────────────────────────

}