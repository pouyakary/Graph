
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
            Id: string;
            SnapCircle: ISnapObject;
            Inputs: Array<IConnection>;
            Outputs: Array<IConnection>;
            X: number;
            Y: number;
            NumeberId: number;
            Label: string;
        }

    //
    // ─── DOT OBJECT ─────────────────────────────────────────────────────────────────
    //

        /** Dot object contation information on the nodes of the graph */
        export class Dot implements IDot {

            //
			// ─── GLOBALS ────────────────────────────────────────────────
			//

                /** For counting how many nodes are created. */
                static TotalDots : number = 0;

			//
			// ─── DEFS ───────────────────────────────────────────────────
			//
            
                /** To be used as the hash key in dictionaries */
                Id: string;
                /** For displaying the object */
                SnapCircle: ISnapObject;
                /** Keeps the Inputs of the dot */
                Inputs: Array<IConnection>;
                /** Keeps the Outputs of the dot */
                Outputs: Array<IConnection>;
                /** X Coordinates of the dot */
                X: number;
                /** Y Coordintaes of the dot */
                Y: number;
                /** Unique number id of the dot */
                NumeberId: number;
                /** Optional label of the dot */
                Label: string;

			//
			// ─── CONSTRUCTOR ────────────────────────────────────────────
			//

                constructor ( x: number, y: number ) {
                    // basic allocation
                    this.X = x;
                    this.Y = y;
                    this.Label = '';
                    // generating the circle
                    this.SnapCircle = Circle.Create( x, y );
                    this.Id = this.SnapCircle.id;
                    // number id
                    this.NumeberId = ++Dot.TotalDots;
                    // inputs and outputs
                    this.Inputs = new Array<IConnection> ( );
                    this.Outputs = new Array<IConnection> ( );
                }

			// ────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}