

/*

declare module "at-commands-parser" {

    interface ParsedAtCommand {
        commands: Object[];
        raw: string;
    }


    interface parseAtCommand {
        (atCommand: string): ParsedAtCommand;
    }

    var fun: parseAtCommand;

    export = fun;
}

*/





declare module "at-commands-parser" {

    export interface ParsedAtCommand {
        commands: Object[];
        raw: string;
    }

    export function atCommandsParser(atCommand: string): ParsedAtCommand;
}





