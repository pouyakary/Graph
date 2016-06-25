
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
            // ─── VARIABLES ──────────────────────────────────────────────
            //

                /** Unique id of the object */
                public Id: string;

                /** Line object representing the line */
                private LineObject: ISnapObject;

                /** Statirng dot */
                private StartDot: Dot;

                /** Ending dot */
                private EndDot: Dot;

                /** Line's start coordintation X */
                private StartX: number;

                /** Line's start coordintation Y */
                private StartY: number;

                /** Line's end coordintation X */
                private EndX: number;

                /** Line's end coordintation Y */
                private EndY: number;

            //
            // ─── CONSTRUCTOR ────────────────────────────────────────────
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
                    Storage.Connections[ this.StartDot.Id + this.EndDot.Id ] = this;
                }

            //
            // ─── REMOVER ────────────────────────────────────────────────
            //

                public Remove ( ) {
                    this.LineObject.remove( );
                    delete this;
                }

            //
            // ─── CREATE LINE OBJECT ─────────────────────────────────────
            //

                /** Inits the line object for representing the object */
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
                    this.Id = this.LineObject.id;
                }

            //
            // ─── MOVE START ─────────────────────────────────────────────
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
            // ─── MOVE END ───────────────────────────────────────────────
            //

                /** Moves the end of the line to _x_ and _y_ */
                public MoveEnd ( x: number, y: number ) {
                    this.EndX = x;
                    this.EndY = y;
                    this.LineObject.attr({
                        x2: x, y2: y
                    });
                }

            // ────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}