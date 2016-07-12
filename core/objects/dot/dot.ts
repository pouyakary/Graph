
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph {

    //
    // ─── DOT OBJECT ─────────────────────────────────────────────────────────────────
    //

        /** Dot object contains information on the nodes of the graph */
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
                public NumberLabelDistanceY: number;

                /**
                 * Keeps the Inputs of the dot
                 * Inputs = {
                 *    **Connected Dot Id** : ***Snap Line Object***
                 * }
                 */
                private Inputs: Array<string>;

                /**
                 * Keeps the Outputs of the dot
                 * Inputs = {
                 *    **Connected Dot Id** : ***Snap Line Object***
                 * }
                 */
                private Outputs: Array<string>;

                /**
                 * X Coordinates of the dot
                 * ***Changing won't make effect, use MoveTo instead***
                 */
                public X: number;

                /**
                 * Y Coordinates of the dot
                 * ***Changing won't make effect, use MoveTo instead***
                 */
                public Y: number;

                /** Unique number id of the dot */
                private NumberId: number;

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

                    // Initializing the ID
                    this.Id = this.SnapCircle.id;

                    // number id
                    this.NumberId = ++Dot.TotalDots;
                    this.NumberLabelDistanceX = DotNumberLabelDisplacementX;
                    this.NumberLabelDistanceY = DotNumberLabelDisplacementY;

                    // the snap svg
                    if ( Dot.DisplayNumberLabels )
                        this.SnapNumberLabel = this.CreateNumberLabel( );

                    // inputs and outputs
                    this.Inputs = new Array<string> ( );
                    this.Outputs = new Array<string> ( );

                    // Adding self to the Graph
                    Storage.Nodes[ this.Id ] = this;
                }

            //
            // ─── GET NUMBER ID ──────────────────────────────────────────
            //

                public GetNumberId ( ): number {
                    return this.NumberId;
                }

            //
            // ─── RESET TOTAL DOTS ───────────────────────────────────────
            //

                public static ResetNumberIdPlace ( ) {
                    Dot.TotalDots = 0;
                }

            //
            // ─── REMOVER ────────────────────────────────────────────────
            //

                /**
                 * Removes the class. Remove the connections
                 * and Snap objects and the other parts
                 */
                public Remove ( ) {

                    // remove the circle
                    this.SnapCircle.remove( );

                    // remove the label
                    if ( this.SnapNumberLabel != null )
                        this.SnapNumberLabel.remove( );

                    // remove the connections
                    this.RemoveInputConnection( );
                    this.RemoveOutputConnection( );

                    // removing self
                    delete Storage.Nodes[ this.Id ];
                }

            //
            // ─── CONNECTION REMOVERS ────────────────────────────────────
            //

                /** Removes a input connection and lines of the dot */
                public RemoveInputConnection ( ) {
                    this.Inputs.forEach( dotKey => {
                        this.DisconnectInput( dotKey );
                    });
                }

                /** Removes a output connection and lines of the dot */
                public RemoveOutputConnection ( ) {
                    this.Outputs.forEach( dotKey => {
                        this.DisconnectOutput( dotKey );
                    });
                }

            //
            // ─── DISCONNECT FROM ────────────────────────────────────────
            //

                /** Disconnect dot from Dot */
                public DisconnectFrom( dot: Dot ): boolean {
                    if ( this.Inputs[ dot.Id ] != undefined ) {
                        this.DisconnectInput( dot.Id );
                        return true;
                    } else if ( this.Outputs[ dot.Id ] != undefined ) {
                        this.DisconnectOutput( dot.Id );
                        return true;
                    }
                    return false;
                }

                /** Disconnects input dot */
                private DisconnectInput( dotID: string ) {
                    ( <Vertex> Storage.Connections[ dotID + this.Id ] ).Remove( );
                    delete Storage.Nodes[ dotID ].Outputs[ this.Id ];
                    delete this.Inputs[ dotID ];
                }

                /** Disconnects output dot */
                private DisconnectOutput( dotID: string ) {
                    ( <Vertex> Storage.Connections[ this.Id + dotID ] ).Remove( );
                    delete Storage.Nodes[ dotID ].Inputs[ this.Id ];
                    delete this.Outputs[ dotID ];
                }

            //
            // ─── CONNECT TO ─────────────────────────────────────────────
            //

                /** Connects a ***Dot*** object  */
                public ConnectTo( dotToBeConnected: Dot ) {
                    let vertex = new Vertex( this, dotToBeConnected );
                    this.Outputs.push( dotToBeConnected.Id );
                    dotToBeConnected.Inputs.push( this.Id );
                }

            //
            // ─── CHECK IF CONNECTED TO ──────────────────────────────────
            //

                public IsConnectedTo( dot: Dot ): boolean {
                    if ( this.Outputs[ dot.Id ] != undefined ) {
                        return true;
                    } else if ( this.Inputs[ dot.Id ] != undefined ) {
                        return true;
                    }
                    return false;
                }

            //
            // ─── NUMBER OF INPUTS ───────────────────────────────────────
            //

                public NumberOfInputs( ): number {
                    return Object.keys( this.Inputs ).length;
                }

            //
            // ─── NUMBER OF INPUTS ───────────────────────────────────────
            //

                public NumberOfOutputs( ): number {
                    return Object.keys( this.Outputs ).length;
                }

            //
            // ─── GET ALL CHILDREN ───────────────────────────────────────
            //

                public GetChildren ( ids?: number[ ] ): any {
                    if ( !ids ) var ids: number[ ] = [ ];
                    var map = new Map();
                    var keys = Object.keys( Storage.Nodes );
                    keys.forEach( key => {
                        var dot = <Dot> Storage.Nodes[ key ];
                        if ( this.Outputs[ dot.Id ] != undefined ) {
                            if ( ids.indexOf( dot.GetNumberId( ) ) != -1 ) {
                                return -1
                            }
                            ids.push( dot.GetNumberId( ) );
                            var children = dot.GetChildren( ids );
                            if ( children == -1 ) {
                                return -1
                            }
                            map.set( dot, children );
                        }
                    });
                    return map;
                }

            //
            // ─── DEGREE OF VERTEX ───────────────────────────────────────
            //

                public GetDegree ( ): number {
                    return this.NumberOfInputs() + this.NumberOfOutputs();
                }

            //
            // ─── GET NEIGHBORS ──────────────────────────────────────────
            //

                public GetNeighbors ( ): KaryGraph.Dot[ ] {

                    var neighbors: KaryGraph.Dot[ ] = [ ];
                    var keys = Object.keys( Storage.Nodes );
                    keys.forEach( key => {

                        Object.keys( this.Inputs ).forEach( input => {
                          if ( ( <Dot> Storage.Nodes[ key ] ).Id == input ) {
                              neighbors.push( Storage.Nodes[ key ] );
                          }
                        });

                        Object.keys( this.Outputs ).forEach( output => {
                          if ( ( <Dot> Storage.Nodes[ key ] ).Id == output ) {
                              neighbors.push( Storage.Nodes[ key ] );
                          }
                        });

                    });

                    return neighbors;
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
                private ApplyTransformationToOutputs ( ) {
                    this.Outputs.forEach( outputID => {
                        Storage.Connections[ this.Id + outputID ].MoveStart( this.X, this.Y );
                    });
                }

                /** Transforms the input connections when the dot is moved. */
                private ApplyTransformationToInputs ( ) {
                    this.Inputs.forEach( inputID => {
                        Storage.Connections[ inputID + this.Id ].MoveEnd( this.X, this.Y );
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
                        this.NumberId.toString( )
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
                            y: this.Y - this.NumberLabelDistanceY
                        });
                    }
                }

            // ────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}
