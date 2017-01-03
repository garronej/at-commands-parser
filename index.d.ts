/*
interface ParsedAtCommand {
    commands: Object[];
    raw: string;
}


interface parseAtCommand {
    (atCommand: string): ParsedAtCommand;
}


declare module "at-commands-parser" {
    export = fun;
}

declare var fun: parseAtCommand;
*/


declare module "at-commands-parser" {

    export interface ParsedAtCommand {
        commands: Object[];
        raw: string;
    }


    export interface parseAtCommand {
        (atCommand: string): ParsedAtCommand;
    }

    var fun: parseAtCommand;

    export = fun;
}
