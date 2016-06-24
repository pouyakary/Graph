
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph {

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
        }

    //
	// ─── DRAG MOVE - REMOVE MODE ────────────────────────────────────────────────────
	//

        export function DragModeFunctionRemoveMode( circle: ISnapObject, dx: number, 
                                                    dy: number, posx: number, posy: number ) {
            
        }

    //
    // ─── DRAG MOVE - EDIT MOVE ──────────────────────────────────────────────────────
    //

        export function DragModeFunctionEditMode( circle: ISnapObject, dx: number, 
                                                  dy: number, posx: number, posy: number ) {
            
        }

    //
	// ─── DRAG MOVE - SELECT MOVE ────────────────────────────────────────────────────
	//

        export function DragModeFunctionSelectMode( circle: ISnapObject, dx: number, 
                                                    dy: number, posx: number, posy: number ) {
            
        }

    // ────────────────────────────────────────────────────────────────────────────────

}