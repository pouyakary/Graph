
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

    //
	// ─── NODES ──────────────────────────────────────────────────────────────────────
	//

        /** Contains all the dot objects assosiated to their ids. */
        export var Nodes: Object;

    // ────────────────────────────────────────────────────────────────────────────────
     
}