
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="view.ts" />
/// <reference path="../dfiles/snapsvg.d.ts" />
/// <reference path="snapobject.ts" />

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
            return Line.Create(
                d1.X + CircleRadius,
                d1.Y + CircleRadius,
                d2.X + CircleRadius,
                d2.Y + CircleRadius
            );
        }

    // ────────────────────────────────────────────────────────────────────────────────

}