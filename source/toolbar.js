
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

//
// ─── STATUS VIEW ────────────────────────────────────────────────────────────────
//

    function changeStatusTo( text ) {
        document.getElementById( statusViewId ).innerText = text;
    }

//
// ─── HOVER EVENTS ───────────────────────────────────────────────────────────────
//

    function onMoveIconHover( ) {
        changeStatusTo('For moving the vertices and points');
    }

    function onRemoveIconHover( ) {
        changeStatusTo('For removing vertices and points');
    }

    function onEditIconHover( ) {
        changeStatusTo('For editing the vertices');
    }

    function onSelectIconHover( ) {
        changeStatusTo('For selecting points and vertices');
    }

    function doneTips( ) {
        changeStatusTo('');
    }

//
// ─── CLICK EVENTS ───────────────────────────────────────────────────────────────
//

    function onMoveIconClicked( ) {
        changeToActiveMode( moveIconId );
    }

    function onRemoveIconClicked( ) {
        changeToActiveMode( removeIconId );
    }

    function onEditIconClicked( ) {
        changeToActiveMode( editIconId );
    }

    function onSelectIconClicked( ) {
        changeToActiveMode( selectIconId );
    }

    // changes icons to active state
    function changeToActiveMode( id ) {
        if ( activeMode === id ) {
            changeStatusTo('This tool is already active!');
            return;
        }
        activeMode = id;
        var icon = document.getElementById( id );
        changeToActiveClass( icon );
        changeStatusTo('Tool activated, ready to use');
    }

    // changes icons to active state class
    function changeToActiveClass( icon ) {
        forEachIconDo(function(ic){
            ic.classList.remove('icon-active');
        });
        icon.classList.add('icon-active');
    }

    // does something to each icon.
    function forEachIconDo( func ) {
        icons = [ moveIconId, editIconId, removeIconId, selectIconId ];
        for ( var index = 0; index < icons.length; index++ ) {
            var icon = document.getElementById( icons[ index ] );
            func( icon ); 
        }
    }