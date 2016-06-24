

//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph {
    
    //
    // ─── GRAPH ──────────────────────────────────────────────────────────────────────
    //

        /**
         * Main ***memory*** containing the graph. Designed in
         * a MVVC model in mind structure of this any type is:
         * ```
         * Graph = {
         *    DotObjectId : Dot
         * }
         * ```
         */
        export var Graph: any;

    //
    // ─── PAPER ──────────────────────────────────────────────────────────────────────
    //

        /**
         * The **main** view, a ***Snap SVG Paper*** contatining 
         * the whole model.
         */
        export var GraphView: Paper;

        /** Width of the graph paper */
        export var GraphWidth: number;

        /** Height of the graph paper */
        export var GraphHeight: number;

        /** Graphs distance to the window top */
        export var GraphMarginTop: number;

    //
    // ─── GROUPS ─────────────────────────────────────────────────────────────────────
    //

        /** Where the lines are stored within the paper */
        export var GraphLines: ISnapGroup;

        /** Where the circles are stored within the paper */
        export var GraphCircles: ISnapGroup;

    //
    // ─── INIT WINDOW SIZES ──────────────────────────────────────────────────────────
    //

        /**
         * At the *start* of the windw, this function initilizes 
         * the window properties.
         */
        export function InitScreenInformation ( ) {

            // The paper
            GraphView = Snap(`#${ GraphViewId }`);

            // Groups (notice the order...)
            GraphLines = <ISnapGroup> GraphView.g();

            // the memory
            Graph = { };

            // getting the paper...
            var paperObject = document.getElementById( GraphViewId );
            var paperStyle  = window.getComputedStyle( paperObject, null );

            // computing numbers we need...
            GraphWidth  = parseInt( paperStyle.getPropertyValue('width') );
            GraphHeight = parseInt( paperStyle.getPropertyValue('height') );
            GraphMarginTop = paperObject.getBoundingClientRect().top;
        }

    //
    // ─── SCREEN CLICK EVENTS ────────────────────────────────────────────────────────
    //

    // ────────────────────────────────────────────────────────────────────────────────

}