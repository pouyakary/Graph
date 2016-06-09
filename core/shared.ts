
/// <reference path="graph.ts" />
/// <reference path="constants.ts" />

module KaryGraph {
    
    //
    // ─── GRAPH ──────────────────────────────────────────────────────────────────────
    //

        /** Main memory containing the graph. Designed in a MVVC model in mind */
        export var Graph: { [id: string]: IDot } = { };

    //
    // ─── PAPER ──────────────────────────────────────────────────────────────────────
    //

        export var GraphView = Snap(`#${ GraphViewId }`);

    // ────────────────────────────────────────────────────────────────────────────────
    
}