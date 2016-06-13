
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="../../dfiles/snapsvg.d.ts" />
/// <reference path="view.ts" />
/// <reference path="../constants.ts" />
/// <reference path="snapobject.ts" />

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
    // ─── MOVE MODE ──────────────────────────────────────────────────────────────────
    //



}