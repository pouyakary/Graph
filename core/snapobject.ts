
module KaryGraph {

    //
    // ─── ATTRIBUTE ──────────────────────────────────────────────────────────────────
    //


        //
        // Attributes
        //

        interface ISnapAttributes {
            [ id: string ]: any;
        }

        interface ISnapAttributesFunction {
            ( attributes: ISnapAttributes );
        }

        //
        // Animation
        //

        interface ISnapAnimateFunction {
            ( attributes: ISnapAttributes , duration: number )
        }

        //
        // Data
        //

        interface ISnapDataFunction {
            ( string, any? )
        }

        //
        // Drag
        //

        interface ISnapDragMoveFunction {
            ( dx: number, dy: number, posx: number, posy: number )
        }

        interface ISnapDragFunction {
            ( move: ISnapDragMoveFunction, start: Function, stop: Function  )
        }


        /** Implements Snap Objects (circle, line,... ) */
        export interface ISnapObject {
            /** Changes the attributes of the object */
            attr: ISnapAnimateFunction;
            /** Animates the object */
            animate: ISnapAnimateFunction;
            /** drag implementation */
            drag: ISnapDragFunction;
            data: ISnapDataFunction;
            id: string;
        }

}