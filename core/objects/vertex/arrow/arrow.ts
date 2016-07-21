
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph {

    //
    // ─── ARROW BASE CLASS ───────────────────────────────────────────────────────────
    //

        /**
         * Implements the shared properties between _arrow objects_
         * to implement a bridge between different arrow objects
         * and the _Vertex_ object.
         */
        export class ArrowBase {

            //
            // ─── DEFS ────────────────────────────────────────────────────────
            //

                /** Starting position of the Arrow. */
                public Start: Point;

                /** Ending Position of the Arrow. */
                public End: Point;

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( start: Point, end: Point ) {
                    this.Start = start;
                    this.End = end;
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}