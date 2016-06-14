
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="../../../dfiles/snapsvg.d.ts" />
/// <reference path="../../ui/view.ts" />
/// <reference path="../../constants.ts" />
/// <reference path="../../ui/toolbar.ts" />
/// <reference path="../snapobject.ts" />

/// <reference path="drag-move.ts" />
/// <reference path="drag-start.ts" />
/// <reference path="drag-stop.ts" />


module KaryGraph.Circle {

    //
    // ─── GENERATOR ──────────────────────────────────────────────────────────────────
    //

        export function Create ( x: number, y: number ): ISnapObject {
            var circle = <ISnapObject> GraphView.circle( x, y, CircleRadius );
            circle.drag( CircleDragOnMove, CircleDragOnStart, CircleDragOnStop );
            return circle;
        }

    //
	// ─── GET ARRAY INDEX ────────────────────────────────────────────────────────────
	//

        function GetArrayIndexBasedOnModes( ): number {
            switch ( UI.Toolbar.ToolbarMode ) {
                case UI.Toolbar.ToolbarModeEnum.Move:
                    return 0;
                case UI.Toolbar.ToolbarModeEnum.Remove:
                    return 1;
                case UI.Toolbar.ToolbarModeEnum.Edit:
                    return 2;
                case UI.Toolbar.ToolbarModeEnum.Select:
                    return 3;
            }
        }  

    //
    // ─── EVENT HANDLERS ─────────────────────────────────────────────────────────────
    //

        var CircleDragOnMove = function ( dx:number, dy:number, posx:number, posy:number ) {
            var func = DragMoveFunctions[ GetArrayIndexBasedOnModes( ) ];
            func( ( <ISnapObject> this ) , dx, dy, posx, posy );
        }

        var CircleDragOnStart = function ( ) {
            var func = DragStartFunctions[ GetArrayIndexBasedOnModes( ) ];
            func( ( <ISnapObject> this ) );
        }

        var CircleDragOnStop = function ( ) {
            var func = DragStopFunctions[ GetArrayIndexBasedOnModes( ) ];   
            func( ( <ISnapObject> this ) );
        }

    // ────────────────────────────────────────────────────────────────────────────────

}