
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

//
// ─── NODE FS ────────────────────────────────────────────────────────────────────
//

    declare function JoinPath ( addresses: string[ ] ): string;

    declare function ReadFile ( address: string, 
                                   func: ( error: NodeJS.ErrnoException, data: string ) => void
                              );

    declare function ReadFileSync ( address: string ): string;

    declare function ReadDir ( address: string, 
                                  func: ( error: NodeJS.ErrnoException, files: string[] ) => void
                              );

    declare function ReadDirSync ( address: string ): string[ ];

    declare function FSStatsSync ( address: string ): IFSStatsResult;

    declare function FSExistsSync ( address: string ): boolean;

//
// ─── PRISM JS ───────────────────────────────────────────────────────────────────
//

    declare function PrismHighlight ( code: string ): string;

//
// ─── GET HOME DIR ───────────────────────────────────────────────────────────────
//

    declare function GetHomeDir ( ): string;

// ────────────────────────────────────────────────────────────────────────────────



//
// ─── NODE INNER DEFS ────────────────────────────────────────────────────────────
//

    interface IFSStatsResult {
        isFile(): boolean;
        isDirectory(): boolean;
        isBlockDevice(): boolean;
        isCharacterDevice(): boolean;
        isSymbolicLink(): boolean;
        isFIFO(): boolean;
        isSocket(): boolean;
    }

// ────────────────────────────────────────────────────────────────────────────────