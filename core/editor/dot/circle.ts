
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="../../../dfiles/snapsvg.d.ts" />
/// <reference path="../../ui/view.ts" />
/// <reference path="../../constants.ts" />
/// <reference path="../../ui/toolbar.ts" />
/// <reference path="../snapobject.ts" />

module KaryGraph.Circle {

    //
    // ─── GENERATOR ──────────────────────────────────────────────────────────────────
    //

        export function Create ( x: number, y: number ): ISnapObject {
            var circle = <ISnapObject> GraphView.circle( x, y, CircleRadius );
            circle.drag( circleDragOnMove, circleDragOnStart, circleDragOnStop );
            return circle;
        }
    
    //
    // ─── EVENT HANDLERS ─────────────────────────────────────────────────────────────
    //

        var circleDragOnMove = function ( dx:number, dy:number, posx:number, posy:number ) {
            
        }

        var circleDragOnStart = function ( ) {
            
        }

        var circleDragOnStop = function ( ) {
            
        }

    //
    // ─── FUNCTION SELECTOR ──────────────────────────────────────────────────────────
    //

        function ModeBasedFunctionSelector( funcs: Array<Function> ) {
            switch ( UI.Toolbar.ToolbarMode ) {
                case UI.Toolbar.EToolbarMode.Move:
                    break;

                case UI.Toolbar.EToolbarMode.Remove:
                    break;

                case UI.Toolbar.EToolbarMode.Edit:
                    break;

                case UI.Toolbar.EToolbarMode.Select:
                    break;
            }
        }

}