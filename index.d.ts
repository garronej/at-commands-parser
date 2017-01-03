
export declare interface ParsedAtCommand {
    commands: Object[];
    raw: string;
}


export declare interface parseAtCommand {
    (atCommand: string): ParsedAtCommand;
}


declare module "at-commands-parser" {

    var fun: parseAtCommand;

    export = fun;
}




/*

declare module "at-commands-parser" {


    export interface ParsedAtCommand {
        commands: Object[];
        raw: string;
    }


    export interface parseAtCommand {
        (atCommand: string): ParsedAtCommand;
    }

    export function parser(atCommand: string): ParsedAtCommand;
}

*/




