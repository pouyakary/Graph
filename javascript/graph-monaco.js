
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

//
// ─── MONACO STARTER ─────────────────────────────────────────────────────────────
//

    function GraphInitMonacoOnStart ( ) {

        function uriFromPath ( _path ) {
            var pathName = path.resolve( _path ).replace( /\\/g, '/' );
            if ( pathName.length > 0 && pathName.charAt( 0 ) !== '/' ) {
                pathName = '/' + pathName;
            }
            return encodeURI( 'file://' + pathName );
        }

        require.config({
            baseUrl: uriFromPath( __dirname )
        });

        // workaround monaco-css not understanding the environment
        self.module = undefined;

        // workaround monaco-typescript not understanding the environment
        self.process.browser = true;

        require([ 'vs/editor/editor.main' ], function ( ) {
            KaryGraph.UI.ProgrammerTab.Editor = monaco.editor.create(
                document.getElementById( 'monaco-placeholder' ), {
                    value: [
                        '',
                        '// We have a very awesome wiki about the graph API here:',
                        '// https://github.com/karyfoundation/graph/wiki/API',
                        "// we're sure you'll love it...",
                        '',
                        'reset( );',
                        'let dots = newdots( 10 );',
                        'connect( range( 1, 10 ) );',
                    ].join( '\n' ),

                    language: 'javascript',
                    fontFamily: 'GraphSourceCodePro',
                    fontSize: 13,
                    lineHeight: 24
                }
            );
        });
    }

// ────────────────────────────────────────────────────────────────────────────────