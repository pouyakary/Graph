
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph {

    //
    // ─── ARROW BASE INTERFACE ───────────────────────────────────────────────────────
    //

        /**
         * Implements the shared properties between _arrow objects_
         * to implement a bridge between different arrow objects
         * and the _Vertex_ object.
         */
        export interface IArrow {

            //
            // ─── BASE CLASS TOOLS ────────────────────────────────────────────
            //

                Remove ( );

            //
            // ─── MOVEMENTS ───────────────────────────────────────────────────
            //

                MoveStart ( position: Point );

                MoveEnd ( position: Point );

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}