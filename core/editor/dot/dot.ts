
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="../../../typings/snapsvg.d.ts" />
/// <reference path="circle.ts" />
/// <reference path="../vertex/line.ts" />

module KaryGraph {

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

                /** 
                 * Keeps the Inputs of the dot 
                 * Inputs = {
                 *    **Connected Dot Id** : ***Snap Line Object***
                 * }
                 */
                private Inputs: any;

                /** 
                 * Keeps the Outputs of the dot
                 * Inputs = {
                 *    **Connected Dot Id** : ***Snap Line Object***
                 * }
                 */
                private Outputs: any;

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
                    this.Inputs = { }
                    this.Outputs = { };
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

                    // remove the connections
                    this.RemoveInputConnection( );
                    this.RemoveOutputConnection( );

                    // removing self
                    delete Graph[ this.Id ];
                }
    
            //
			// ─── CONNECTION REMOVERS ────────────────────────────────────
			//

                /** Removes a connection */
                public RemoveInputConnection( ) {
                    this.ForeachConnection( this.Inputs , key => {
                        var connectedNode = <Dot> Graph[ key ];
                        var connectionLine = <ISnapObject> this.Inputs[ key ];
                        connectionLine.remove( );
                        delete connectedNode.Outputs[ this.Id ];
                        delete this.Inputs[ key ];
                    });
                }

                public RemoveOutputConnection( ) {
                    this.ForeachConnection( this.Outputs , key => {
                        var connectedNode = <Dot> Graph[ key ];
                        var connectionLine = <ISnapObject> this.Outputs[ key ];
                        connectionLine.remove( );
                        delete connectedNode.Inputs[ this.Id ];
                        delete this.Outputs[ key ];
                    });
                }

            //
			// ─── FOR EACH CONNECTION DO ─────────────────────────────────
			//

                public ForeachConnection( connections: any, func: ( connectionKey: string ) => void ) {
                    var keys = Object.keys( connections );
                    keys.forEach( connectionKey => {
                        func( connectionKey );
                    });
                }

			//
			// ─── CONNECT TO ─────────────────────────────────────────────
			//

                public ConnectTo( dotToBeConnected: Dot ): boolean {

                    // Is that already a connection?
                    if ( this.Outputs[ dotToBeConnected.Id ] != undefined ) {
                        return false;
                    }

                    // the line
                    let line = Line.CreateLineBetweenDots( this, dotToBeConnected );
                    GraphLines.add( line );

                    // connecting to self
                    this.Outputs[ dotToBeConnected.Id ] = line;
                    
                    // connecting to dest
                    dotToBeConnected.Inputs[ this.Id ] = line;

                    // done
                    return true;
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

                private ApplyTransformationToOutputs( x: number, y: number ) {
                    this.ForeachConnection( this.Outputs , key => {
                        ( <ISnapObject> this.Outputs[ key ] ).attr({ 
                            x1: x, 
                            y1: y 
                        });
                    });
                }

                private ApplyTransformationToInputs( x: number, y: number ) {
                    this.ForeachConnection( this.Inputs , key => {
                        ( <ISnapObject> this.Inputs[ key ] ).attr({ 
                            x2: x, 
                            y2: y 
                        });
                    });
                }

            //
			// ─── FOR EACH CONNECTION DO ─────────────────────────────────
			//



			// ────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}