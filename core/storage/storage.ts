
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/**
 * This name space is used to store all the Graph's ***model information***.
 */
namespace KaryGraph.Storage {

    //
    // ─── CONNECTIONS ────────────────────────────────────────────────────────────────
    //
        /** Contains all the vector objects associated to their ids. */
        export var Connections = { };

    //
    // ─── NODES ──────────────────────────────────────────────────────────────────────
    //

        /** Contains all the dot objects associated to their ids. */
        export var Nodes = { };

    //
    // ─── ALGORITHMS ─────────────────────────────────────────────────────────────────
    //

        /** Contains all the algorithm extension objects. */
        export var Algorithms = { };

    //
    // ─── DOT EVENT STORAGE ──────────────────────────────────────────────────────────
    //

        export var DotEvents: ScriptEngine.EventHandler.IDotEvents = {
            OnMove:     new Array<ScriptEngine.EventHandler.IDotEventFunction> ( ),
            OnSelect:   new Array<ScriptEngine.EventHandler.IDotEventFunction> ( ),
            OnDrag:     new Array<ScriptEngine.EventHandler.IDotEventFunction> ( ),
            OnRemove:   new Array<ScriptEngine.EventHandler.IDotEventFunction> ( ),
        };

    // ────────────────────────────────────────────────────────────────────────────────

}