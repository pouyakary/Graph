
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph {

    //
    // ─── DIRECTED LINE OBJECT ───────────────────────────────────────────────────────
    //

        export class LineArrow implements IArrow {

            //
            // ─── DEFS ────────────────────────────────────────────────────────
            //

                /** Holds the line */
                private SnapLine: ISnapObject;

                /** Holds the arrow ending */
                private SnapArrowEnding: ISnapObject;

                /** Holds the Vertex parts to together */
                private ISnapGroup: ISnapGroup;

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( start: Point, end: Point ) {
                    this.InitSnapObject( start, end );
                }

            //
            // ─── INIT LINE OBJECT ────────────────────────────────────────────
            //

                /** Creates an Snap line for the arrow */
                private InitSnapObject ( start: Point, end: Point ) {
                    this.SnapLine = <ISnapObject> GraphView.line(
                        start.X, start.Y, end.X, end.Y
                    );
                    this.SnapLine.attr({
                        stroke: GraphColor,
                        strokeWidth: LineWidth
                    });
                    GraphLines.add( this.SnapLine );
                }

            //
            // ─── REMOVE ──────────────────────────────────────────────────────
            //

                public Remove ( ) {
                    
                }

            //
            // ─── MOVE START OF THE ARROW ─────────────────────────────────────
            //

                /** Moves the start of the vertex to the given Point. */
                public MoveStart ( position: Point ) {
                    this.SnapLine.attr({
                        x1: position.X, y1: position.Y
                    });
                }

            //
            // ─── MOVE END OF THE ARROW ───────────────────────────────────────
            //

                /** Moves the end of the vertex to the given Point. */
                public MoveEnd ( position: Point ) {
                    this.SnapLine.attr({
                        x2: position.X, y2: position.Y
                    });
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}