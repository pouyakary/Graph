
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module Graph {

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
                private Arrow: IArrow;

                /** Starting dot */
                private StartDot: Dot;

                /** Ending dot */
                private EndDot: Dot;

                /** Line's start coordination */
                private Start: Point;

                /** Line's end coordination */
                private End: Point;

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( startDot: Dot, endDot: Dot ) {
                    // start
                    this.StartDot = startDot;
                    this.Start = startDot.Position;

                    // end
                    this.EndDot = endDot;
                    this.End = endDot.Position;

                    // init line object
                    this.InitArrow( );

                    // registering self
                    Storage.Connections[ this.GetStorageId( ) ] = this;
                }

            //
            // ─── REMOVER ─────────────────────────────────────────────────────
            //

                public Remove ( ) {
                    this.Arrow.Remove( );
                    delete Storage.Connections[ this.GetStorageId( ) ];
                    delete this;
                }

            //
            // ─── CREATE THE OBJECT ───────────────────────────────────────────
            //

                /** Initializes the arrow object for representing the object */
                private InitArrow ( ) {
                    if ( this.EndDot === this.StartDot ) {
                        this.Arrow = new LoopArrow( this.Start );
                    } else {
                        this.Arrow = new LineArrow( this.Start, this.End );
                    }
                }

            //
            // ─── MOVE START ──────────────────────────────────────────────────
            //

                /** Moves the start of the arrow to _x_ and _y_ */
                public MoveStart ( position: Point ) {
                    this.Start = position;
                    this.Arrow.MoveStart( position );
                }

            //
            // ─── MOVE END POINT ──────────────────────────────────────────────
            //

                /** Moves the end of the arrow to _x_ and _y_ */
                public MoveEnd ( position: Point ) {
                    this.End = position;
                    this.Arrow.MoveEnd( position );
                }

            //
            // ─── GET STORAGE ID ──────────────────────────────────────────────
            //

                public GetStorageId ( ): string {
                    return this.StartDot.Id + this.EndDot.Id;
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}