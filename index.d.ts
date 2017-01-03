declare module "at-commands-parser" {

    export interface ParsedAtCommand {
        commands: Object[];
        raw: string;
    }

    export default function parseAtCommand(atCommand: string ): ParsedAtCommand;


}