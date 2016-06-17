
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

//
// ─── CREATE DOT ─────────────────────────────────────────────────────────────────
//

    function adddot( ): KaryGraph.Dot {
        return KaryGraph.AbstractionLayer.AddNewDot( );
    }

//
// ─── GETDOT ─────────────────────────────────────────────────────────────────────
//

    function getdot( numberId: number ): KaryGraph.Dot {
        return KaryGraph.AbstractionLayer.GetDotByNumberId( numberId );
    }

//
// ─── CONNECT ────────────────────────────────────────────────────────────────────
//

    function connect( a: KaryGraph.Dot, b: KaryGraph.Dot ) {
        return a.ConnectTo( b );
    }

// ────────────────────────────────────────────────────────────────────────────────