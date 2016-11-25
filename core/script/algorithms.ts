
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
            description: string;
        }

        export interface IAlgorithm {
            ( args: Object ): void;
        }

        export interface IAlgorithmObject {
            manifest: IAlgorithmManifest;
            algorithm: IAlgorithm;
        }

    //
    // ─── EXECUTE ALGORITHM ──────────────────────────────────────────────────────────
    //

        export function ExecuteAlgorithm ( handle: string ) {
            let algorithm = Storage.Algorithms[ handle ] as IAlgorithm;
            algorithm({ });
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

                    document.getElementById( AlgorithmsControlContainerId ).innerHTML +=
                        '<div style="clear: both;"></div>';
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

            // algorithms
            let algorithm: IAlgorithm;
            try {
                algorithm = <IAlgorithm> NodeRequire( mainFilePath );
            } catch ( error ) {
                console.error("Couldn't load the algorithm script");
                return;
            }

            let algorithmObject: IAlgorithmObject = {
                algorithm: algorithm,
                manifest: manifest
            };

            // storing the algorithm
            Storage.Algorithms[ NormalizeHandle( manifest.handle ) ] = algorithm;

            // making a control
            try {
                UI.AlgorithmsTab.MakeAlgorithmControlView( algorithmObject );
            } catch ( error ) {
                console.log(`Couldn't make controller view for ${ manifest.name }.`);
                console.log( error );
            }
        }

    //
    // ─── LOAD PREFERENCES ───────────────────────────────────────────────────────────
    //

        function LoadAlgorithmsManifest ( algorithmsAddress: string ) {
            let manifestPath = JoinPath([ algorithmsAddress, AlgorithmsPackageName ]);
            if ( FSExistsSync( manifestPath ) ) {
                return JSON.parse( ReadFileSync( manifestPath ) ) as IAlgorithmManifest;
            } else {
                return undefined;
            }
        }

    //
    // ─── NORMALIZE HANDLE ───────────────────────────────────────────────────────────
    //

        export function NormalizeHandle ( handle: string ) {
            return handle.replace( /\./g , '-' );
        }

    // ────────────────────────────────────────────────────────────────────────────────

}