
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="ui/view.ts" />
/// <reference path="editor/graph.ts" />

/// <reference path="editor/selection.ts" />

'use strict';

module KaryGraph {
    /** What starts the code when it starts. */
    export function INIT ( ) {
        InitScreenInformation( );
        GenerateSomeRandomNodes( 20 );
        AddRandomConnections( 20 );

        // var selection = new SelectionBox( 800, 100 );
    }
}

