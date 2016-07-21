
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph {

    //
    // ─── DIRECTED LINE OBJECT ───────────────────────────────────────────────────────
    //

        export class LineArrow extends ArrowBase {

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
                    super ( start, end );
                }

            //
            // ─── INIT LINE OBJECT ────────────────────────────────────────────
            //

                private CreateSnapLineObject( ) {
                    this.SnapLine = <ISnapObject> GraphView.line(
                        this.Start.X,
                        this.Start.Y,
                        this.End.X,
                        this.End.Y
                    );
                    this.SnapLine.attr({
                        stroke: GraphColor,
                        strokeWidth: LineWidth
                    });
                    GraphLines.add( this.SnapLine );
                }

            //
            // ─── MOVE START OF THE ARROW ─────────────────────────────────────
            //

                /** Moves the start of the vertex to the given Point. */
                public MoveStart ( newPosition: Point ) {
                    this.Start = newPosition;
                    this.SnapLine.attr({
                        x1: this.Start.X, y1: this.Start.Y
                    });
                }

            //
            // ─── MOVE END OF THE ARROW ───────────────────────────────────────
            //

                /** Moves the end of the vertex to the given Point. */
                public MoveEnd ( newPosition: Point ) {
                    this.End = newPosition;
                    this.SnapLine.attr({
                        x2: this.End.X, y2: this.End.Y
                    });
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}