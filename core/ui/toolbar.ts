
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="../constants.ts" />

module KaryGraph.UI.Toolbar {

    //
    // ─── TOOLBAR MODE ───────────────────────────────────────────────────────────────
    //

        export enum EToolbarMode { 
            Move, Remove, Edit, Select
        }

        export var ToolbarMode: EToolbarMode = EToolbarMode.Move;

    //
    // ─── ICON ON HOVER ──────────────────────────────────────────────────────────────
    //

        export function OnIconClick ( id: string ) {
            ChangeModeByElementId( id );
        }

    //
	// ─── CHANGE MODE BY ELEMENT ID ──────────────────────────────────────────────────
	//

        function ChangeModeByElementId( id: string ) {
            switch ( id ) {

                // Move icon...
                case 'icon-move':
                    ToolbarMode = EToolbarMode.Move;
                    break;

                // Remove icon...
                case 'icon-remove':
                    ToolbarMode = EToolbarMode.Remove;
                    break;

                // Edit icon...
                case 'icon-edit':
                    ToolbarMode = EToolbarMode.Edit;
                    break;

                // Select icon....
                case 'icon-select':
                    ToolbarMode = EToolbarMode.Select;
                    break;
            }
        }

	//
	// ─── ON TOOLBAR ICON HOVER ──────────────────────────────────────────────────────
	//

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

        export function ChangeToActiveMode( id: string ) {
            
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

    // ────────────────────────────────────────────────────────────────────────────────

}