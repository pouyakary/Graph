
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

namespace Graph {

    //
    // ─── DIRECTED LOOP OBJECT ───────────────────────────────────────────────────────
    //

        export class LoopArrow implements IArrow {

            //
            // ─── DEFS ────────────────────────────────────────────────────────
            //

                /** Holds the Circle */
                private SnapCircle: ISnapObject;

                /** Holds the arrow ending */
                private SnapArrowEnding: ISnapObject;

                /** Holds the Vertex parts to together */
                private SnapGroup: ISnapGroup;

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( position: Point ) {
                    this.InitSnapObject( position );
                }

            //
            // ─── INIT LINE OBJECT ────────────────────────────────────────────
            //

                /** Creates an Snap line for the arrow */
                private InitSnapObject ( position: Point ) {
                    this.SnapCircle = <ISnapObject> GraphView.circle(
                        position.X + LoopArrowDisplacementX,
                        position.Y + LoopArrowDisplacementY,
                        LoopArrowRadius
                    );
                    GraphLines.add( this.SnapCircle );
                }

            //
            // ─── REMOVE ──────────────────────────────────────────────────────
            //

                public Remove ( ) {
                    this.SnapCircle.remove( );
                    this.SnapArrowEnding.remove( );
                }

            //
            // ─── MOVE START OF THE ARROW ─────────────────────────────────────
            //

                /** Moves the start of the vertex to the given Point. */
                public MoveStart ( position: Point ) {
                    this.SnapCircle.attr({
                        x1: position.X, y1: position.Y
                    });
                }

            //
            // ─── MOVE END OF THE ARROW ───────────────────────────────────────
            //

                /** Moves the end of the vertex to the given Point. */
                public MoveEnd ( position: Point ) {
                    this.SnapCircle.attr({
                        x2: position.X, y2: position.Y
                    });
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}