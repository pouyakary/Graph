
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
            // ─── GLOBALS ─────────────────────────────────────────────────────
            //

                /** For counting how many nodes are created. */
                static TotalDots : number = 0;

                static DisplayNumberLabels : boolean = true;

            //
            // ─── DEFS ────────────────────────────────────────────────────────
            //

                /** To be used as the hash key in dictionaries */
                public Id: string;

                /** For displaying the object */
                public SnapCircle: ISnapObject;

                /** Snap Label */
                public SnapNumberLabel: ISnapObject;

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
                public Position: Point;

                /** Unique number id of the dot */
                private NumberId: number;

                /** Optional label of the dot */
                private Label: string;

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( x: number, y: number ) {

                    // basic allocation
                    this.Position = new Point( x, y );
                    this.Label = '';

                    // generating the circle
                    this.SnapCircle = Circle.Create( x, y );

                    // Initializing the ID
                    this.Id = this.SnapCircle.id;

                    // number id
                    this.NumberId = ++Dot.TotalDots;

                    // the snap svg
                    if ( Dot.DisplayNumberLabels ) {
                        this.SnapNumberLabel = this.CreateNumberLabel( );
                    }

                    // inputs and outputs
                    this.Inputs = new Array<string> ( );
                    this.Outputs = new Array<string> ( );

                    // Adding self to the Graph
                    Storage.Nodes[ this.Id ] = this;
                }

            //
            // ─── GET NUMBER ID ───────────────────────────────────────────────
            //

                public GetNumberId ( ): number {
                    return this.NumberId;
                }

            //
            // ─── RESET TOTAL DOTS ────────────────────────────────────────────
            //

                public static ResetNumberIdPlace ( ) {
                    Dot.TotalDots = 0;
                }

            //
            // ─── REMOVER ─────────────────────────────────────────────────────
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
            // ─── REMOVE CONNECTION FROM INPUT ────────────────────────────────
            //

                /** Removes a input connection and lines of the dot */
                public RemoveInputConnection ( ) {
                    this.Inputs.forEach( dotKey => {
                        this.DisconnectInput( dotKey );
                    });
                }

            //
            // ─── REMOVE OUTPUT CONNECTION ────────────────────────────────────
            //

                /** Removes a output connection and lines of the dot */
                public RemoveOutputConnection ( ) {
                    this.Outputs.forEach( dotKey => {
                        this.DisconnectOutput( dotKey );
                    });
                }

            //
            // ─── DISCONNECT FROM ─────────────────────────────────────────────
            //

                /** Disconnect dot from Dot */
                public DisconnectFrom ( dot: Dot ): boolean {
                    var res = false;
                    if ( LanguageTools.ArrayExists( this.Inputs, dot.Id ) ) {
                        this.DisconnectInput( dot.Id );
                        res = true;
                    } else if ( LanguageTools.ArrayExists( this.Outputs, dot.Id ) ) {
                        this.DisconnectOutput( dot.Id );
                        res = true;
                    }
                    return res;
                }

            //
            // ─── DISCONNECT INPUT ────────────────────────────────────────────
            //

                /** Disconnects input dot */
                private DisconnectInput ( dotID: string ) {
                    if ( ( <Vertex> Storage.Connections[ dotID + this.Id ] ) != undefined ) {
                        ( <Vertex> Storage.Connections[ dotID + this.Id ] ).Remove( );
                    }

                    if ( Storage.Nodes[ dotID ] != undefined
                         && Storage.Nodes[ dotID ].Outputs[ this.Id ] != undefined ) {
                        delete Storage.Nodes[ dotID ].Outputs[ this.Id ];
                    }

                    if ( this.Inputs[ dotID ] != undefined ) {
                        delete this.Inputs[ dotID ];
                    }
                }

            //
            // ─── DISCONNECT OUTPUT ───────────────────────────────────────────
            //

                /** Disconnects output dot */
                private DisconnectOutput ( dotID: string ) {
                    if ( ( <Vertex> Storage.Connections[ this.Id + dotID ] ) != undefined ) {
                        ( <Vertex> Storage.Connections[ this.Id + dotID ] ).Remove( );
                    }

                    if ( Storage.Nodes[ dotID ] != undefined
                         && Storage.Nodes[ dotID ].Inputs[ this.Id ] != undefined ) {
                        delete Storage.Nodes[ dotID ].Inputs[ this.Id ];
                    }

                    if ( this.Outputs[ dotID ] != undefined ) {
                        delete this.Outputs[ dotID ];
                    }
                }

            //
            // ─── CONNECT TO ──────────────────────────────────────────────────
            //

                /** Connects a ***Dot*** object  */
                public ConnectTo ( dotToBeConnected: Dot ) {
                    let vertex = new Vertex( this, dotToBeConnected );
                    this.Outputs.push( dotToBeConnected.Id );
                    dotToBeConnected.Inputs.push( this.Id );
                }

            //
            // ─── CHECK IF CONNECTED TO ───────────────────────────────────────
            //

                public IsConnectedTo ( dot: Dot ): boolean {
                    if ( this.Outputs[ dot.Id ] != undefined ) {
                        return true;
                    } else if ( this.Inputs[ dot.Id ] != undefined ) {
                        return true;
                    }
                    return false;
                }

            //
            // ─── NUMBER OF INPUTS ────────────────────────────────────────────
            //

                public NumberOfInputs ( ): number {
                    return Object.keys( this.Inputs ).length;
                }

            //
            // ─── NUMBER OF OUTPUTS ───────────────────────────────────────────
            //

                public NumberOfOutputs ( ): number {
                    return Object.keys( this.Outputs ).length;
                }

            //
            // ─── GET ALL CHILDREN ────────────────────────────────────────────
            //

                public GetChildren ( ids?: number[ ] ): Map<Dot, any> {
                    // if empty
                    if ( !ids ) {
                        var ids: number[ ] = [ ];
                    }

                    
                    var map = new Map<Dot, any>( );
                    var keys = Object.keys( Storage.Nodes );

                    keys.forEach( key => {
                        var dot = <Dot> Storage.Nodes[ key ];
                        if ( this.Outputs[ dot.Id ] != undefined ) {
                            if ( ids.indexOf( dot.GetNumberId( ) ) != -1 ) {
                                return null;
                            }

                            ids.push( dot.GetNumberId( ) );
                            var children = dot.GetChildren( ids );

                            if ( children === null ) {
                                return null;
                            }

                            map.set( dot, children );
                        }
                    });
                    return map;
                }

            //
            // ─── DEGREE OF VERTEX ────────────────────────────────────────────
            //

                public GetDegree ( ): number {
                    return this.NumberOfInputs( ) + this.NumberOfOutputs( );
                }

            //
            // ─── GET NEIGHBORS ───────────────────────────────────────────────
            //

                public GetNeighbors ( ): KaryGraph.Dot[ ] {

                    /** FIXME: Current Algorithm is so slow and should be changed in future. */
                    var neighbors: KaryGraph.Dot[ ] = [ ];
                    var keys = Object.keys( Storage.Nodes );

                    keys.forEach( key => {
                        this.Inputs.forEach( input => {
                          if ( ( <Dot> Storage.Nodes[ key ] ).Id == input ) {
                              neighbors.push( Storage.Nodes[ key ] );
                          }
                        });

                        this.Outputs.forEach( output => {
                          if ( ( <Dot> Storage.Nodes[ key ] ).Id == output ) {
                              neighbors.push( Storage.Nodes[ key ] );
                          }
                        });
                    });

                    return neighbors;
                }

            //
            // ─── MOVE TO ─────────────────────────────────────────────────────
            //

                /**
                 * Moves the coordinations of the object.
                 */
                public MoveTo ( x: number, y: number ) {
                    this.Position.X = x;
                    this.Position.Y = y;
                    this.SnapCircle.attr({
                        cx: x, cy: y
                    });
                    this.MoveNumberLabel();
                    this.ApplyTransformationToOutputs( );
                    this.ApplyTransformationToInputs( );
                }

            //
            // ─── APPLY TRANSFORMATION ON OUTPUTS ─────────────────────────────
            //

                /** Transforms the output connections when the dot is moved. */
                private ApplyTransformationToOutputs ( ) {
                    this.Outputs.forEach( outputID => {
                        ( <Vertex> Storage.Connections[ this.Id + outputID ]).MoveStart( this.Position );
                    });
                }

            //
            // ─── APPLY TRANSFORMATION ON INPUTS ──────────────────────────────
            //

                /** Transforms the input connections when the dot is moved. */
                private ApplyTransformationToInputs ( ) {
                    this.Inputs.forEach( inputID => {
                        if ( inputID === this.Id ) {
                            // do nothing
                        } else {
                            ( <Vertex> Storage.Connections[ inputID + this.Id ]).MoveEnd( this.Position );
                        }
                    });
                }

            //
            // ─── INIT LABEL ──────────────────────────────────────────────────
            //

                /** Creates a Snap Label object to present the graph node number */
                private CreateNumberLabel ( ) : ISnapObject {
                    var label = <ISnapObject> GraphView.text(
                        this.Position.X - DotNumberLabelDisplacementX,
                        this.Position.Y - DotNumberLabelDisplacementY,
                        this.NumberId.toString( )
                    );

                    label.attr({
                        'font-size': DotNumberLabelFontSize,
                        'color': GraphColor
                    });

                    return label;
                }

            //
            // ─── MOVE NUMBER LABEL ───────────────────────────────────────────
            //

                /** Moves the Number Label when the dot is moved */
                private MoveNumberLabel ( ) {
                    if ( Dot.DisplayNumberLabels ) {
                        this.SnapNumberLabel.attr({
                            x: this.Position.X - DotNumberLabelDisplacementX,
                            y: this.Position.Y - DotNumberLabelDisplacementY
                        });
                    }
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}