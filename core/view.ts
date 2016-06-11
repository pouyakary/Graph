

//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="dot.ts" />
/// <reference path="constants.ts" />


module KaryGraph {
    
    //
    // ─── GRAPH ──────────────────────────────────────────────────────────────────────
    //

        /** Main memory containing the graph. Designed in a MVVC model in mind */
        export var Graph = new Array<Dot> ( );
    //
    // ─── PAPER ──────────────────────────────────────────────────────────────────────
    //

        export var GraphView = Snap(`#${ GraphViewId }`);

        export var GraphWidth: number;
        export var GraphHeight: number;
        export var GraphMarginTop: number;

	//
	// ─── INIT WINDOW SIZES ──────────────────────────────────────────────────────────
	//

        export function InitScreenInformation ( ) {
            // getting the paper...
            var paperObject = document.getElementById( GraphViewId );
            var paperStyle  = window.getComputedStyle( paperObject, null );
            // computing numbers we need...
            GraphWidth  = parseInt( paperStyle.getPropertyValue('width') );
            GraphHeight = parseInt( paperStyle.getPropertyValue('height') );
            GraphMarginTop = paperObject.getBoundingClientRect().top;
        }

    // ────────────────────────────────────────────────────────────────────────────────
    
}