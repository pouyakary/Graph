
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="../../../dfiles/snapsvg.d.ts" />
/// <reference path="circle.ts" />
/// <reference path="../vertex/line.ts" />

module KaryGraph {

    //
    // ─── OBJECT INTERFACES ──────────────────────────────────────────────────────────
    //

        /** Implements a connection */
        export interface IConnection {
            CircleId: string;
            LineToCircle: ISnapObject;
        }

    //
    // ─── DOT OBJECT ─────────────────────────────────────────────────────────────────
    //

        /** Dot object contation information on the nodes of the graph */
        export class Dot {

            //
			// ─── GLOBALS ────────────────────────────────────────────────
			//

                /** For counting how many nodes are created. */
                static TotalDots : number = 0;

			//
			// ─── DEFS ───────────────────────────────────────────────────
			//
            
                /** To be used as the hash key in dictionaries */
                public Id: string;

                /** For displaying the object */
                private SnapCircle: ISnapObject;

                /** Keeps the Inputs of the dot */
                private Inputs: Array<IConnection>;

                /** Keeps the Outputs of the dot */
                private Outputs: Array<IConnection>;

                /** X Coordinates of the dot */
                public X: number;

                /** Y Coordintaes of the dot */
                public Y: number;

                /** Unique number id of the dot */
                private NumeberId: number;

                /** Optional label of the dot */
                private Label: string;

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
                    this.Inputs  = new Array<IConnection> ( );
                    this.Outputs = new Array<IConnection> ( );
                }

			//
			// ─── CONNECT TO ─────────────────────────────────────────────
			//

                public ConnectTo( input: Dot ) {
                    // the line
                    let line = Line.CreateLineBetweenDots( this, input );

                    // connecting to self
                    this.Outputs.push({
                        CircleId: input.Id,
                        LineToCircle: line
                    });
                    
                    // connecting to dest
                    input.Inputs.push({
                        CircleId: this.Id,
                        LineToCircle: line
                    });
                }

			//
			// ─── MOVE TO ────────────────────────────────────────────────
			//

                public MoveTo( x: number, y: number ) {
                    
                }

			// ────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}