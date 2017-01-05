declare module "at-commands-parser" {

    export interface AtCommand {
        type: string;
        raw: string;
    }

    export namespace AtCommandImplementations {

        export interface General extends AtCommand {
            subtype: string;
            name: {
                prefix: string,
                value: string
            };
        }

        export interface GeneralSetOrExec extends General {
            arguments: (number | string)[];
        }

        export interface GeneralExec extends General { }
        export interface GeneralRead extends General { }
        export interface GeneralTest extends General { }

        export interface Basic extends AtCommand {
            name: string;
            argument?: number;
        }

        export interface SRegister extends AtCommand {
            subType: string;
            regNumber: number;
        }

        export interface SRegisterRead extends SRegister { }

        export interface SRegisterSet extends SRegister {
            argument: {
                code: number;
                char: string;
            }
        }

    }


    export interface ParsedAtCommand {
        commands: AtCommand[];
        raw: string;
    }

    export function atCommandsParser(rawAtCommand: string): ParsedAtCommand;
}

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