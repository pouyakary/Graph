
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

namespace Graph {

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

                /** Removes the Arrow objects and deletes the memory for it. */
                Remove ( );

            //
            // ─── MOVEMENTS ───────────────────────────────────────────────────
            //

                /** Moves _start_ of the arrow object to the given _position_ */
                MoveStart ( position: Point );

                /** Moves _end_ of the arrow object to the given _position_ */
                MoveEnd ( position: Point );

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}