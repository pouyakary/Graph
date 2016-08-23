//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

namespace KaryGraph.Installer {

    //
    // ─── INSTALL OUTER DEPENDENCIES ─────────────────────────────────────────────────
    //

        /** This module checks the graph folder and it's subdirs to exists, if not
         * it'll make them */
        export function ConfigureGraphFolder ( ) {
            let base = JoinPath([ GetHomeDir( ), GraphUserFolderPath ]);
            CheckAndCreateDir( base );
            CheckAndCreateDir( JoinPath([ base, GraphUserFolderForAlgorithms ]) );
        }

    //
    // ─── CHECK AND CREATE ───────────────────────────────────────────────────────────
    //

        function CheckAndCreateDir ( address ) {
            if ( !FSExistsSync( address ) ) {
                MakeDirSync( address );
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}