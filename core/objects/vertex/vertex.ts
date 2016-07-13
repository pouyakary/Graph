
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph {

    //
    // ─── VERTEX CLASS ───────────────────────────────────────────────────────────────
    //

        export class Vertex {

            //
            // ─── VARIABLES ───────────────────────────────────────────────────
            //

                /** Unique id of the object */
                public Id: string;

                /** Line object representing the line */
                private LineObject: ISnapObject;

                /** Starting dot */
                private StartDot: Dot;

                /** Ending dot */
                private EndDot: Dot;

                /** Line's start coordination X */
                private StartX: number;

                /** Line's start coordination Y */
                private StartY: number;

                /** Line's end coordination X */
                private EndX: number;

                /** Line's end coordination Y */
                private EndY: number;

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( startDot: Dot, endDot: Dot ) {
                    // start
                    this.StartDot = startDot;
                    this.StartX = startDot.X;
                    this.StartY = startDot.Y;

                    // end
                    this.EndDot = endDot;
                    this.EndX = endDot.X;
                    this.EndY = endDot.Y;

                    // init line object
                    this.CreateLineObject( );

                    // registering self
                    Storage.Connections[ this.GetStorageId( ) ] = this;
                }

            //
            // ─── REMOVER ─────────────────────────────────────────────────────
            //

                public Remove ( ) {
                    this.LineObject.remove( );
                    delete Storage.Connections[ this.GetStorageId( ) ];
                    delete this;
                }

            //
            // ─── CREATE THE OBJECT ───────────────────────────────────────────
            //

                /** Initializes the line object for representing the object */
                private CreateLineObject ( ) {
                    this.LineObject = <ISnapObject> GraphView.line(
                        this.StartX,
                        this.StartY,
                        this.EndX,
                        this.EndY
                    );
                    this.LineObject.attr({
                        stroke: GraphColor,
                        strokeWidth: LineWidth
                    });
                    GraphLines.add( this.LineObject );
                    this.Id = this.LineObject.id;
                }

            //
            // ─── MOVE START ──────────────────────────────────────────────────
            //

                /** Moves the start of the line to _x_ and _y_ */
                public MoveStart ( x: number, y: number ) {
                    this.StartX = x;
                    this.StartY = y;
                    this.LineObject.attr({
                        x1: x, y1: y
                    });
                }

            //
            // ─── MOVE END POINT ──────────────────────────────────────────────
            //

                /** Moves the end of the line to _x_ and _y_ */
                public MoveEnd ( x: number, y: number ) {
                    this.EndX = x;
                    this.EndY = y;
                    this.LineObject.attr({
                        x2: x, y2: y
                    });
                }

            //
            // ─── GET STORAGE ID ──────────────────────────────────────────────
            //

                public GetStorageId( ): string {
                    return this.StartDot.Id + this.EndDot.Id;
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}