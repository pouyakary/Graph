
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

namespace Graph {

    //
    // ─── ADD EVENT TO SVG ───────────────────────────────────────────────────────────
    //

        /** Adds an ***event*** to the ***element*** */
        export function AddEventOnClick ( element: ISnapObject, event: string ) {
            document.getElementById( element.id ).setAttribute( 'onClick', event );
        }

    // ────────────────────────────────────────────────────────────────────────────────

}