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
interface ParsedAtCommand {
    commands: Object[];
    raw: string;
}


interface parseAtCommand {
    (atCommand: string): ParsedAtCommand;
}


declare module "at-commands-parser" {

    var fun: parseAtCommand;

    export = fun;
}
