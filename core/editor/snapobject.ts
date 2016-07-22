
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph {

    //
    // ─── SNAP ATTRIBUTES ────────────────────────────────────────────────────────────
    //

        interface ISnapAttributes {
                   fill?: string;
                 stroke?: string;
            strokeWidth?: number;
            'font-size'?: number;
                  color?: string;
                      x?: number;
                      y?: number;
                     cx?: number;
                     cy?: number;
                     x1?: number;
                     y1?: number;
                     x2?: number;
                     y2?: number;
        }

    //
    // ─── ATTRIBUTE ──────────────────────────────────────────────────────────────────
    //

        interface ISnapAttributesFunction {
            ( attributes: ISnapAttributes );
        }

    //
    // ─── ANIMATION ──────────────────────────────────────────────────────────────────
    //

        interface ISnapAnimateFunction {
            ( attributes: any , duration: number )
        }

    //
    // ─── DATA ───────────────────────────────────────────────────────────────────────
    //

        interface ISnapDataFunction {
            ( string, any? )
        }

    //
    // ─── DRAG MOVE ──────────────────────────────────────────────────────────────────
    //

        interface ISnapDragMoveFunction {
            ( dx: number, dy: number, posx: number, posy: number )
        }

    //
    // ─── DRAG ───────────────────────────────────────────────────────────────────────
    //

        interface ISnapDragFunction {
            ( move: ISnapDragMoveFunction, start: Function, stop: Function  )
        }

    //
    // ─── SNAP OBJECT ────────────────────────────────────────────────────────────────
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
    // ─── SNAP GROUP ─────────────────────────────────────────────────────────────────
    //

        interface ISnapAddFunction {
            ( ISnapObject )
        }

        export interface ISnapGroup {
            add: ISnapAddFunction
        }

    // ────────────────────────────────────────────────────────────────────────────────

}