
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="../../../typings/snapsvg.d.ts" />
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
                public SnapCircle: ISnapObject;

                /** Snap Label */
                public SnapLabel: ISnapObject;

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

                    // Initing the ID
                    this.Id = this.SnapCircle.id;

                    // number id
                    this.NumeberId = ++Dot.TotalDots;

                    // inputs and outputs
                    this.Inputs  = new Array<IConnection> ( );
                    this.Outputs = new Array<IConnection> ( );
                }


            //
			// ─── REMOVER ────────────────────────────────────────────────
			//

                public Remove( ) {
                    // remove the circle
                    this.SnapCircle.remove();
                    // remove the label
                    if ( this.SnapLabel != null )
                        this.SnapLabel.remove();
                    // remove the input connections
                    this.Inputs.forEach( connection => {
                        this.RemoveInputConnection( connection );
                    });
                    // remove the output connections
                    this.Outputs.forEach( connection => {
                        this.RemoveOutputConnection( connection );
                    });
                }
    
            //
			// ─── CONNECTION REMOVERS ────────────────────────────────────
			//

                /** Removes a connection */
                public RemoveInputConnection( connection: IConnection ) {
                    var connectedNode = <Dot> Graph[ connection.CircleId ];
                    connection.LineToCircle.remove();
                    var index = 0;
                    connectedNode.Outputs.forEach( input => {
                        if ( input.CircleId == connection.CircleId ) {
                            connectedNode.Outputs.splice( index, 1 );
                            return;
                        }
                        index++;
                    });
                }

                public RemoveOutputConnection( connection: IConnection ) {
                    var connectedNode = <Dot> Graph[ connection.CircleId ];
                    connection.LineToCircle.remove();
                    var index = 0;
                    connectedNode.Inputs.forEach( input => {
                        if ( input.CircleId == connection.CircleId ) {
                            connectedNode.Inputs.splice( index, 1 );
                            return;
                        }
                        index++;
                    });
                }

			//
			// ─── CONNECT TO ─────────────────────────────────────────────
			//

                public ConnectTo( input: Dot ) {

                    // Is that already a connection?
                    this.Inputs.forEach( element => {
                        if ( element.CircleId = input.Id ) {
                            return;
                        }
                    });

                    // the line
                    let line = Line.CreateLineBetweenDots( this, input );
                    GraphLines.add( line );

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

                /**
                 * Moves the coordinations of the object.
                 */
                public MoveTo( x: number, y: number ) {
                    this.SnapCircle.attr({
                        cx: x,
                        cy: y
                    });
                    this.ApplyTransformationToOutputs( x , y );
                    this.ApplyTransformationToInputs( x , y );
                }

                ApplyTransformationToOutputs( x: number, y: number ) {
                    this.Outputs.forEach( connection => {
                        connection.LineToCircle.attr({ x1: x, y1: y });
                    });
                }

                ApplyTransformationToInputs( x: number, y: number ) {
                    this.Inputs.forEach( connection => {
                        connection.LineToCircle.attr({ x2: x, y2: y });
                    });
                }

			// ────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}