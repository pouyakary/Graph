
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph {

    //
	// ─── DRAG START FUNCTION LIST ───────────────────────────────────────────────────
	//

        export const DragStopFunctions = [
            DragStopFunctionMoveMode,
            DragStopFunctionRemoveMode,
            DragStopFunctionEditMode,
            DragStopFunctionSelectMode
        ];

    //
	// ─── DRAG START - MOVE MODE ─────────────────────────────────────────────────────
	//

        export function DragStopFunctionMoveMode( circle: ISnapObject ) {
            circle.animate( { "r": CircleRadius }, CircleAnimationDurationAtStop );
        }

    //
	// ─── DRAG START - REMOVE MODE ───────────────────────────────────────────────────
	//

        export function DragStopFunctionRemoveMode( circle: ISnapObject ) {
            
        }

    //
	// ─── DRAG START - EDIT MOVE ─────────────────────────────────────────────────────
	//

        export function DragStopFunctionEditMode( circle: ISnapObject ) {
            
        }

    //
	// ─── DRAG START - SELECT MOVE ───────────────────────────────────────────────────
	//

        export function DragStopFunctionSelectMode( circle: ISnapObject ) {
            
        }

    // ────────────────────────────────────────────────────────────────────────────────

}