
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="dot.ts" />
/// <reference path="view.ts" />
/// <reference path="constants.ts" />

module KaryGraph {

    //
    // ─── CREATE NODE ────────────────────────────────────────────────────────────────
    //

        export function CreateNode ( x: number, y: number ) {
            var circle = new Dot( x, y );
            Graph[ circle.Id ] = circle; 
        }

    //
    // ─── GENERATE RANDOM NODES ──────────────────────────────────────────────────────
    //

        function GenerateSomeRandomNodes( howManyNodes: number ) {
            
        }
} 