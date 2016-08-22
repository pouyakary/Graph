
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

namespace KaryGraph.ScriptEngine.Algorithms {

    //
    // ─── LOAD ALGORITHMS ────────────────────────────────────────────────────────────
    //

        export function LoadAlgorithmsAsync ( ) {
            let algDir = JoinPath([ 
                GetHomeDir( ), GraphUserFolderPath, GraphUserFolderForAlgorithms ]);

            if ( FSExistsSync( algDir ) ) {
                ReadDir( algDir, ( err, directories ) => {
                    if ( err ) {
                        console.error('Could not load algorithms.'); 
                        return;
                    }

                    directories.forEach( dir => {
                        let fullPath = JoinPath([ algDir, dir ]);
                        if ( FSStatsSync( fullPath ).isDirectory( ) ) {
                            LoadAlgorithm( fullPath );
                        }
                    });
                });
            }
        }

    //
    // ─── LOAD SINGLE ALGORITHM ──────────────────────────────────────────────────────
    //

        function LoadAlgorithm ( address: string ) {
            console.log( address );            
        }

    // ────────────────────────────────────────────────────────────────────────────────

}