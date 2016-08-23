
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

namespace KaryGraph.ScriptEngine.Algorithms {

    //
    // ─── INTERFACES ─────────────────────────────────────────────────────────────────
    //

        export interface IAlgorithmManifest {
            handle: string;
            name: string;
            main: string;
            author: string;
        }

        export interface IAlgorithm {
            start: ( args: Object ) => void;
        }

        export interface IAlgorithmObject {
            manifest: IAlgorithmManifest;
            algorithm: IAlgorithm;
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
            // getting the manifest
            let manifest = LoadAlgorithmsManifest( address );

            // loading the algorithm
            let mainFilePath = JoinPath([ address, manifest.main ]);
            if ( !FSExistsSync( mainFilePath ) ) return;
            let algorithm = <IAlgorithm> NodeRequire( mainFilePath );
            let algorithmObject: IAlgorithmObject = {
                algorithm: algorithm,
                manifest: manifest
            };

            // storing the algorithm
            Storage.Algorithms[ manifest.handle ] = algorithmObject;

            // making a control
            UI.AlgorithmsTab.MakeAlgorithmControlView( algorithmObject );
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