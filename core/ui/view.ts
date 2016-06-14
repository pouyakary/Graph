

//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="../editor/dot.ts" />
/// <reference path="../constants.ts" />


module KaryGraph {
    
    //
    // ─── GRAPH ──────────────────────────────────────────────────────────────────────
    //

        /** 
         * Main ***memory*** containing the graph. Designed in a MVVC model in mind 
         */
        export var Graph = new Array<Dot>( );
        
    //
    // ─── PAPER ──────────────────────────────────────────────────────────────────────
    //

        /**
         * The **main** view, a ***Snap SVG Paper*** contatining the whole model.
         */
        export var GraphView: Paper;

        /** Width of the graph paper */
        export var GraphWidth: number;

        /** Height of the graph paper */
        export var GraphHeight: number;

        /** Graphs distance to the window top */
        export var GraphMarginTop: number;

	//
	// ─── INIT WINDOW SIZES ──────────────────────────────────────────────────────────
	//

        /** 
         * At the *start* of the windw, this function initilizes the window 
         * properties.
         */
        export function InitScreenInformation ( ) {
            GraphView = Snap(`#${ GraphViewId }`);
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