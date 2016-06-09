
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="../dfiles/snapsvg.d.ts" />
/// <reference path="circle.ts" />


module KaryGraph {

    //
    // ─── OBJECT INTERFACES ──────────────────────────────────────────────────────────
    //

        /** Implements a connection */
        export interface IConnection {
            CircleId: string;
            LineToCircle: any;
        }

        /** Implements a dot object. */
        export interface IDot {
            id: string;
            circle: Object;
            inputs: Array<IConnection>;
            outputs: Array<IConnection>;
            x: number;
            y: number;
            number: number;
            text: string;
        }

    //
    // ─── DOT OBJECT ─────────────────────────────────────────────────────────────────
    //

        export class Dot implements IDot {

			//
			// ─── DEFS ───────────────────────────────────────────────────
			//
            
                id: string;
                circle: Object;
                inputs: Array<IConnection>;
                outputs: Array<IConnection>;
                x: number;
                y: number;
                number: number;
                text: string;

			//
			// ─── CONSTRUCTOR ────────────────────────────────────────────
			//

                constructor ( x: number, y: number ) {
                    this.circle = Circle.Create( x, y );
                }

			// ────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}