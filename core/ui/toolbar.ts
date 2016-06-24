
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="../constants.ts" />

module KaryGraph.UI.Toolbar {

    //
    // ─── TOOLBAR MODE ───────────────────────────────────────────────────────────────
    //

        export enum ToolbarModeEnum { 
            Move, Remove, Edit, Select
        }

        /** To get the mode of the toolbar */
        export var ToolbarMode: ToolbarModeEnum = ToolbarModeEnum.Move;

    //
    // ─── ICON ON HOVER ──────────────────────────────────────────────────────────────
    //

        export function OnIconClick ( id: string ) {
            ChangeModeByElementId( id );
            ChangeIconToActiveMode( id );
        }

    //
    // ─── CHANGE MODE BY ELEMENT ID ──────────────────────────────────────────────────
    //

        /** Changes the active mode to the one with ID */
        function ChangeModeByElementId( id: string ) {
            switch ( id ) {
                case 'icon-move':
                    ToolbarMode = ToolbarModeEnum.Move;
                    break;
                case 'icon-remove':
                    ToolbarMode = ToolbarModeEnum.Remove;
                    break;
                case 'icon-edit':
                    ToolbarMode = ToolbarModeEnum.Edit;
                    break;
                case 'icon-select':
                    ToolbarMode = ToolbarModeEnum.Select;
                    break;
            }
        }

    //
    // ─── ON TOOLBAR ICON HOVER ──────────────────────────────────────────────────────
    //

        /** What happens after mouse on hower of toolbar icons */
        export function OnToolbarIconHover( id: string ) {
            switch ( id ) {
                case 'icon-move':
                    ChangeStatusTo('For moving vertices and nodes.');
                    break;
                case 'icon-remove':
                    ChangeStatusTo('For removing vertices and nodes.');
                    break;
                case 'icon-edit':
                    ChangeStatusTo('For editing vertices and nodes.');
                    break;
                case 'icon-select':
                    ChangeStatusTo('For selectting vertices and nodes.');
                    break;
            }
        }

    //
    // ─── ICON CHANGE TO ACTIVE MODE ─────────────────────────────────────────────────
    //

        /** Changes the active icon to the icon with 'id' */
        export function ChangeIconToActiveMode( id: string ) {
            // what to do before changing to active mode:
            Circle.ResetCircleColors( );
            // body
            ForEachIconDo( function ( icon: HTMLDivElement ) {
                icon.classList.remove( ToolbarActiveIconClass );
            })
            document.getElementById( id ).classList.add( ToolbarActiveIconClass );
        }

    //
    // ─── CLEAR STATUS ───────────────────────────────────────────────────────────────
    //

        /** Clears the satutsbar */
        export function ClearStuatus(  ) {
            document.getElementById( StatusbarId ).innerText = '';
        }

    //
    // ─── CHANGE STATUS TEXT ─────────────────────────────────────────────────────────
    //

        /** Changes the status bar text to the provided text */
        function ChangeStatusTo( text: string ) {
            document.getElementById( StatusbarId ).innerText = text;
        }

    //
    // ─── FOR EACH ICON DO ───────────────────────────────────────────────────────────
    //

        /** Applies a function to all icons */
        function ForEachIconDo( func: Function ) {
            // icons
            var icons = [
                ToolbarIconMove,    ToolbarIconRemove,
                ToolbarIconEdit ,   ToolbarIconSelect
            ];
            // for each 
            icons.forEach( iconId => {
                var icon = <HTMLDivElement> document.getElementById( iconId );
                func( icon );
            });
        }

    // ────────────────────────────────────────────────────────────────────────────────

}