
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

        try {
            require([ 'vs/editor/editor.main' ], function ( ) {
                KaryGraph.UI.ProgrammerTab.Editor = monaco.editor.create(
                    document.getElementById( 'monaco-placeholder' ), {
                        value: '',
                        language: 'javascript',
                        fontFamily: 'GraphSourceCodePro',
                        fontSize: 13,
                        lineHeight: 24
                    }
                );
            });
        } catch ( error ) {
            console.log(`could not load monaco: ${ error }`);
        }
    }

// ────────────────────────────────────────────────────────────────────────────────