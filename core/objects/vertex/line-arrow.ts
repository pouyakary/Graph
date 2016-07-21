
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph {

    //
    // ─── DIRECTED LINE OBJECT ───────────────────────────────────────────────────────
    //

        class LineArrow {

            //
            // ─── DEFS ────────────────────────────────────────────────────────
            //

                /** Holds the line */
                private SnapLine: ISnapObject;

                /** Holds the arrow ending */
                private SnapArrowEnding: ISnapObject;

                /** Holds the Vertex parts to together */
                private ISnapGroup: ISnapGroup;

                /** Starting point of the Line */
                private Start: Point;

                /** Ending point of the line */
                private End: Point;

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( start: Point, end: Point ) {
                    // init of the points
                    this.Start = start;
                    this.End = end;
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}