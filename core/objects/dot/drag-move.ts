
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

namespace Graph {

    //
    // ─── DRAG MOVE FUNCTION LIST ────────────────────────────────────────────────────
    //

        export const DragMoveFunctions = [
            DragModeFunctionMoveMode,
            DragModeFunctionRemoveMode,
            DragModeFunctionEditMode,
            DragModeFunctionSelectMode
        ];

    //
    // ─── DRAG MOVE - MOVE MODE ──────────────────────────────────────────────────────
    //

        export function DragModeFunctionMoveMode( circle: ISnapObject, dx: number,
                                                  dy: number, posx: number, posy: number ) {
            posy -= GraphMarginTop;
            ( <Dot> Storage.Nodes[ circle.id ] ).MoveTo( posx , posy );

            ScriptEngine.EventHandler.RunEvents( 'OnMove', circle.id );
        }

    //
    // ─── DRAG MOVE - REMOVE MODE ────────────────────────────────────────────────────
    //

        export function DragModeFunctionRemoveMode( circle: ISnapObject, dx: number,
                                                    dy: number, posx: number, posy: number ) {

            ScriptEngine.EventHandler.RunEvents( 'OnRemove', circle.id );
        }

    //
    // ─── DRAG MOVE - EDIT MOVE ──────────────────────────────────────────────────────
    //

        export function DragModeFunctionEditMode( circle: ISnapObject, dx: number,
                                                  dy: number, posx: number, posy: number ) {

            ScriptEngine.EventHandler.RunEvents( 'OnMove', circle.id );
        }

    //
    // ─── DRAG MOVE - SELECT MOVE ────────────────────────────────────────────────────
    //

        export function DragModeFunctionSelectMode( circle: ISnapObject, dx: number,
                                                    dy: number, posx: number, posy: number ) {

            ScriptEngine.EventHandler.RunEvents( 'OnSelect', circle.id );
        }

    // ────────────────────────────────────────────────────────────────────────────────

}