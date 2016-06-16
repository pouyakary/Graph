
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//


'use strict';

//
// ─── DEFS ───────────────────────────────────────────────────────────────────────
//

	const electron = require( 'electron' );
	const app = electron.app;
	const BrowserWindow = electron.BrowserWindow;
	
//
// ─── GENERATE MAIN WINDOW ───────────────────────────────────────────────────────
//

	let mainWindow;
	
	function createWindow ( ) {
		const window_width = 800;
		const window_height = 300;
		mainWindow = new BrowserWindow({ 
			width: window_width, 	minWidth: window_width - 140, 
			height: window_height,	minHeight: window_height,
			backgroundColor: "#EEEEEE"
		});

		mainWindow.loadURL( 'file://' + __dirname + '/index.html' );
		
		//mainWindow.webContents.openDevTools();

		mainWindow.on( 'closed' , function( ) {
			mainWindow = null;
			app.quit( );
		});
	}
	
//
// ─── ON READY ───────────────────────────────────────────────────────────────────
//

	app.on( 'ready' , createWindow );

// ────────────────────────────────────────────────────────────────────────────────

