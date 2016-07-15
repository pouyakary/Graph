
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph.LanguageTools {

    //
    // ─── ARRAY EXISTS ───────────────────────────────────────────────────────────────
    //

        export function ArrayExists ( array: any[ ], element: any ): boolean {
            array.forEach( item => {
                if ( item === element ) {
                    return true;
                }
            });
            return false;
        }

    // ────────────────────────────────────────────────────────────────────────────────

}