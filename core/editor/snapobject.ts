
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

namespace Graph {

    //
    // ─── ATTRIBUTE ──────────────────────────────────────────────────────────────────
    //

        interface ISnapAttributesFunction {
            ( attributes: any );
        }

    //
    // ─── ANIMATION ──────────────────────────────────────────────────────────────────
    //

        interface ISnapAnimateFunction {
            ( attributes: any , duration: number );
        }

    //
    // ─── DATA ───────────────────────────────────────────────────────────────────────
    //

        interface ISnapDataFunction {
            ( string, any? );
        }

    //
    // ─── DRAG MOVE ──────────────────────────────────────────────────────────────────
    //

        interface ISnapDragMoveFunction {
            ( dx: number, dy: number, posx: number, posy: number );
        }

    //
    // ─── DRAG ───────────────────────────────────────────────────────────────────────
    //

        interface ISnapDragFunction {
            ( move: ISnapDragMoveFunction, start: Function, stop: Function  );
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
            remove( ): void;

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