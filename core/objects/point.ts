
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

namespace Graph {

    //
    // ─── POINT OBJECT ───────────────────────────────────────────────────────────────
    //

        export class Point {

            //
            // ─── DEFS ────────────────────────────────────────────────────────
            //

                /** _Horizontal_ coordinate of the point. */
                public X: number;

                /** _Vertical_ coordinate of the point. */
                public Y: number;

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( x: number, y: number ) {
                    this.X = x;
                    this.Y = y;
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}