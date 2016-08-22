
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

namespace KaryGraph {

    //
	// ─── DRAG START FUNCTION LIST ───────────────────────────────────────────────────
	//

        export const DragStartFunctions = [
            DragStartFunctionMoveMode,
            DragStartFunctionRemoveMode,
            DragStartFunctionEditMode,
            DragStartFunctionSelectMode
        ];

    //
	// ─── DRAG START - MOVE MODE ─────────────────────────────────────────────────────
	//

        export function DragStartFunctionMoveMode( circle: ISnapObject ) {
            circle.animate( { "r": CircleRadiusAtDrag }, CircleAnimationDurationAtStart );
        }

    //
    // ─── DRAG START - REMOVE MODE ───────────────────────────────────────────────────
    //

        export function DragStartFunctionRemoveMode( circle: ISnapObject ) {
            var dot = ( <Dot> Storage.Nodes[ circle.id ] );
            dot.Remove();
            dot = dot;
        }

    //
    // ─── DRAG START - EDIT MOVE ─────────────────────────────────────────────────────
    //

        export function DragStartFunctionEditMode( circle: ISnapObject ) {
            Circle.ResetCircleColors();
            circle.attr({
                fill: GraphSelectColor
            });
        }

    //
    // ─── DRAG START - SELECT MOVE ───────────────────────────────────────────────────
    //

        export function DragStartFunctionSelectMode( circle: ISnapObject ) {

        }

    // ────────────────────────────────────────────────────────────────────────────────

}