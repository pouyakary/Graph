
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/**
 * This name space is used to store all the Graph's ***model information***.
 */
module KaryGraph.Storage {

    //
    // ─── CONNECTIONS ────────────────────────────────────────────────────────────────
    //

        /** Connection Key */
        export type ConnectionKey = [ string, string ];

        /** Contains all the vector objects assosiated to their ids. */
        export var Connections = new Map<ConnectionKey,Vertex> ( );

        /** Register vertex */
        export function RegisterVertex( dot1: Dot, dot2: Dot, vertex: Vertex ) {
            Connections.set( [ dot1.Id, dot2.Id ] , vertex );
        }

        /** RemoveVertex */
        export function RemoveVertex( dot1: Dot, dot2: Dot ) {
            Connections.delete( [ dot1.Id , dot2.Id ] );
        }

        /** Get Vertex */
        export function GetVertex( dot1: Dot, dot2: Dot ): Vertex {
            return Connections.get( [ dot1.Id , dot2.Id ] );
        }

    //
    // ─── NODES ──────────────────────────────────────────────────────────────────────
    //

        /** Contains all the dot objects assosiated to their ids. */
        export var Nodes: Object = { };

    // ────────────────────────────────────────────────────────────────────────────────

}