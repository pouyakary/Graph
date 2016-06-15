
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="../../ui/view.ts" />
/// <reference path="../../../typings/snapsvg.d.ts" />
/// <reference path="../snapobject.ts" />

module KaryGraph.Line {

    //
	// ─── GENERATE LINE ──────────────────────────────────────────────────────────────
	//

        /** Creates a line object */
        export function Create ( x1: number, y1: number, x2: number, y2: number ): ISnapObject {
            var line = <ISnapObject> GraphView.line( x1, y1, x2, y2 );
            line.attr({
                stroke: GraphColor,
                strokeWidth: LineWidth
            });
            return line;
        }

    //
	// ─── CREATE A LINE BETWEEN TWO DOTS ─────────────────────────────────────────────
	//

        /** Creates a line based on coordinates of two dots */
        export function CreateLineBetweenDots ( d1: Dot, d2: Dot ): ISnapObject  {
            return Line.Create( d1.X, d1.Y, d2.X, d2.Y );
        }

    // ────────────────────────────────────────────────────────────────────────────────

}