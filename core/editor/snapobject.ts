
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph {

    //
    // ─── ATTRIBUTE ──────────────────────────────────────────────────────────────────
    //


        //
        // Attributes
        //

            interface ISnapAttributesFunction {
                ( attributes: any );
            }

        //
        // Animation
        //

            interface ISnapAnimateFunction {
                ( attributes: any , duration: number )
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


        //
        // Snap Object
        //

            /** Implements Snap Objects (circle, line,... ) */
            export interface ISnapObject {
                /** Changes the attributes of the object */
                attr: ISnapAttributesFunction;

                /** Animates the object */
                animate: ISnapAnimateFunction;

                /** removes the object */
                remove();
                
                /** drag implementation */
                drag: ISnapDragFunction;
                data: ISnapDataFunction;
                id: string;

            }


        //
        // SNAP GROUP
        //

            interface ISnapAddFunction {
                ( ISnapObject )
            }

            export interface ISnapGroup {
                add: ISnapAddFunction
            }

    // ────────────────────────────────────────────────────────────────────────────────
    
}