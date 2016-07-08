
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph {

    /**
     * Selection - Creates a selection box and at the end of the selection
     * creates a list of selected nodes
     */
    export class SelectionBox {

        //
        // ─── DEFS ───────────────────────────────────────────────────────────────────────
        //

            /** Keeps the *X coordinates* of start of the selection box. */
            private X: number;

            /** Keeps the *Y coordinates* of end of the selection box .*/
            private Y: number;

            /** Keeps the *width* of the selection box. */
            private Width: number;

            /** Keeps the *height* of the selection box. */
            private Height: number;

            /** The *Snap rect* that represents the selection box on the screen. */
            private Rect: ISnapObject;

        //
        // ─── INIT ───────────────────────────────────────────────────────────────────────
        //

            /** Starts a SelectionBox at the given coordinates. */
            constructor( startingX: number, startingY: number ) {
                this.X = startingX;
                this.Y = startingY;
                this.Width = 100;
                this.Height = 100;
                this.InitRect( );
            }

        //
        // ─── INIT THE SNAP BOX ──────────────────────────────────────────────────────────
        //

            /** Initializes the Snap Rect object associated with the SelectionBox */
            private InitRect( ) {
                let rect = <ISnapObject> GraphView.rect( this.X, this.Y, this.Width, this.Height );
                rect.attr({
                    fill: SelectBoxColor,
                    fillOpacity: SelectBoxOpacity,
                });
                this.Rect = rect;
            }
        
        //
        // ─── MOVE MOUSE  ────────────────────────────────────────────────────────────────
        //

            /** At the point of mouse move event this function must be called. */
            public MoveMouse( mouseX: number, mouseY: number ) {

            }

    }
}