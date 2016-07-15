
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph.Circle {

    //
    // ─── GENERATOR ──────────────────────────────────────────────────────────────────
    //

        /** Generates a standard circle object */
        export function Create ( x: number, y: number ): ISnapObject {

            // the circle
            var circle = <ISnapObject> GraphView.circle( x, y, CircleRadius );

            // adding the drag functions
            circle.drag( CircleDragOnMove, CircleDragOnStart, CircleDragOnStop );

            // applying style
            circle.attr({
                fill: GraphColor
            });

            // done
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

        var CircleDragOnMove = function ( dx: number, dy: number, posx: number, posy: number ) {
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

    //
    // ─── FOR EACH CYCLE DO ──────────────────────────────────────────────────────────
    //

        export function ForeachCircle( func: ( circle: ISnapObject ) => void ) {
            var keys = Object.keys( Storage.Nodes );
            keys.forEach( dotId => {
                func( ( <Dot> Storage.Nodes[ dotId ] ).SnapCircle );
            });
        }

    //
    // ─── RESET ALL THE COLORS ───────────────────────────────────────────────────────
    //

        export function ResetCircleColors( ) {
            ForeachCircle( circle => {
                circle.attr({
                    fill: GraphColor
                });
            });
        }

    // ────────────────────────────────────────────────────────────────────────────────

}