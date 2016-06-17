
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

                static DisplayNumberLabels : boolean = true;

			//
			// ─── DEFS ───────────────────────────────────────────────────
			//
            
                /** To be used as the hash key in dictionaries */
                public Id: string;

                /** For displaying the object */
                public SnapCircle: ISnapObject;

                /** Snap Label */
                public SnapNumberLabel: ISnapObject;

                /** Local number label X distance */
                public NumberLabelDistanceX: number;

                /** Local number label Y distance */
                public NumberLobelDistanceY: number;

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

                /** 
                 * X Coordinates of the dot 
                 * ***Changing won't make effect, use MoveTo instead*** 
                 */
                public X: number;

                /** 
                 * Y Coordintaes of the dot 
                 * ***Changing won't make effect, use MoveTo instead***
                 */
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
                    this.NumberLabelDistanceX = DotNumberLabelDisplacementX;
                    this.NumberLobelDistanceY = DotNumberLabelDisplacementY;

                    // the snap svg 
                    if ( Dot.DisplayNumberLabels )
                        this.SnapNumberLabel = this.CreateNumberLabel();

                    // inputs and outputs
                    this.Inputs = { }
                    this.Outputs = { };

                }

            //
			// ─── GET NUMBER ID ──────────────────────────────────────────
			//

                public GetNumberId( ): number {
                    return this.NumeberId;
                }

            //
			// ─── RESET TOTAL DOTS ───────────────────────────────────────
			//

                public static ResetNumberIdPlace( ) {
                    Dot.TotalDots = 0;
                }

            //
			// ─── REMOVER ────────────────────────────────────────────────
			//

                /**
                 * Deconstructs the class. Remove the connections
                 * and Snap objects and the other parts
                 */
                public Remove( ) {

                    // remove the circle
                    this.SnapCircle.remove();

                    // remove the label
                    if ( this.SnapNumberLabel != null )
                        this.SnapNumberLabel.remove();

                    // remove the connections
                    this.RemoveInputConnection( );
                    this.RemoveOutputConnection( );

                    // removing self
                    delete Graph[ this.Id ];
                }
    
            //
			// ─── CONNECTION REMOVERS ────────────────────────────────────
			//

                /** Removes a input connection and lines of the dot */
                public RemoveInputConnection( ) {
                    this.ForeachConnection( this.Inputs , key => {
                        this.DisconnectInput( <Dot> Graph[ key ] );
                    });
                }

                /** Removes a output connection and lines of the dot */
                public RemoveOutputConnection( ) {
                    this.ForeachConnection( this.Outputs , key => {
                        this.DisconnectOutput( <Dot> Graph[ key ] );
                    });
                }

            //
			// ─── DISCONNECT FROM ────────────────────────────────────────
			//

                /** Disconnect dot from Dot */
                public DisconnectFrom( dot: Dot ): boolean {
                    if ( this.Inputs[ dot.Id ] != undefined ) {
                        this.DisconnectInput( dot );
                        return true;
                    } else if ( this.Outputs[ dot.Id ] != undefined ) {
                        this.DisconnectOutput( dot );
                        return true;
                    }
                    return false;
                }

                /** Disconnects input dot */
                private DisconnectInput( dot: Dot ) {
                    var connectionLine = <ISnapObject> this.Inputs[ dot.Id ];
                    connectionLine.remove( );
                    delete dot.Outputs[ this.Id ];
                    delete this.Inputs[ dot.Id ];
                }

                /** Disconnects output dot */
                private DisconnectOutput( dot: Dot ) {
                    var connectionLine = <ISnapObject> this.Outputs[ dot.Id ];
                    connectionLine.remove( );
                    delete dot.Inputs[ this.Id ];
                    delete this.Outputs[ dot.Id ];
                }

            //
			// ─── FOR EACH CONNECTION DO ─────────────────────────────────
			//

                /** 
                 * Applis a funnction to a set of ***connections*** 
                 * (`this.Inputs` / `this.Outputs`) 
                 */
                public ForeachConnection( connections: any, func: ( connectionKey: string ) => void ) {
                    var keys = Object.keys( connections );
                    keys.forEach( connectionKey => {
                        func( connectionKey );
                    });
                }

			//
			// ─── CONNECT TO ─────────────────────────────────────────────
			//

                /** Connects a ***Dot*** object  */
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
                    this.X = x;
                    this.Y = y;
                    this.SnapCircle.attr({
                        cx: this.X,
                        cy: this.Y
                    });
                    this.MoveNumberLabel();
                    this.ApplyTransformationToOutputs( );
                    this.ApplyTransformationToInputs( );
                }

                /** Transforms the output connections when the dot is moved. */
                private ApplyTransformationToOutputs( ) {
                    this.ForeachConnection( this.Outputs , key => {
                        ( <ISnapObject> this.Outputs[ key ] ).attr({ 
                            x1: this.X, 
                            y1: this.Y 
                        });
                    });
                }

                /** Transforms the input connections when the dot is moved. */
                private ApplyTransformationToInputs( ) {
                    this.ForeachConnection( this.Inputs , key => {
                        ( <ISnapObject> this.Inputs[ key ] ).attr({ 
                            x2: this.X, 
                            y2: this.Y
                        });
                    });
                }

            //
			// ─── INIT LABEL ─────────────────────────────────────────────
			//

                /** Creates a Snap Label object to present the graph node number */
                private CreateNumberLabel ( ) : ISnapObject {
                    var label = <ISnapObject> GraphView.text( 
                        this.X - DotNumberLabelDisplacementX, 
                        this.Y - DotNumberLabelDisplacementY, 
                        this.NumeberId.toString( ) 
                    );
                    label.attr({
                        'font-size': DotNumberLabelFontSize,
                        'color': GraphColor
                    });
                    return label;
                }

            //
			// ─── MOVE NUMBER LABEL ──────────────────────────────────────
			//

                /** Moves the Number Label when the dot is moved */
                private MoveNumberLabel ( ) {
                    if ( Dot.DisplayNumberLabels ) {
                        this.SnapNumberLabel.attr({
                            x: this.X - this.NumberLabelDistanceX,
                            y: this.Y - this.NumberLobelDistanceY
                        });
                    }
                }

			// ────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}