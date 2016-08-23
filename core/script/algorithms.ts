
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

namespace KaryGraph.ScriptEngine.Algorithms {

    //
    // ─── INTERFACES ─────────────────────────────────────────────────────────────────
    //

        interface IAlgorithmManifest {
            name: string;
            main: string;
            author: string;
        }

    //
    // ─── LOAD ALGORITHMS ────────────────────────────────────────────────────────────
    //

        export function LoadAlgorithms ( ) {
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
                            try {
                                LoadAlgorithm( fullPath );
                            } catch ( err ) {
                                console.error(`Couldn't load algorithm: ${ dir }`);
                            }
                        }
                    });
                });
            }
        }

    //
    // ─── LOAD SINGLE ALGORITHM ──────────────────────────────────────────────────────
    //

        function LoadAlgorithm ( address: string ) {
            let manifest = LoadAlgorithmsManifest( address );
            if ( FSExistsSync( JoinPath([ address, manifest.name ]))) {

            }
        }

    //
    // ─── LOAD PREFERENCES ───────────────────────────────────────────────────────────
    //

        function LoadAlgorithmsManifest ( algorithmsAddress: string ) {
            let manifestPath = JoinPath([ algorithmsAddress, AlgorithmsPackageName ]);
            if ( FSExistsSync( manifestPath ) ) {
                return <IAlgorithmManifest> JSON.parse( ReadFileSync( manifestPath ) );
            } else {
                return undefined;
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}