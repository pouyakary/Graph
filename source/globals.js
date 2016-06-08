
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

//
// ─── VIEW ───────────────────────────────────────────────────────────────────────
//

    const paperId = 'HedronPaper';
    const radiusSize = 17;
    const radiusHoverSize = 14;
    var paper = Snap( `#${ paperId }` );
    var circles; 
    var lines;
    var connections;
    var screenWidth;
    var screenHeight;
    var screenTop;

//
// ─── TOOLBAR ────────────────────────────────────────────────────────────────────
//

    var statusViewId = 'status-view';
    const moveIconId = 'icon-move';
    const removeIconId = 'icon-remove';
    const editIconId = 'icon-edit';
    const selectIconId = 'icon-select';

// ────────────────────────────────────────────────────────────────────────────────
