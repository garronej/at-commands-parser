declare module "node-python-messaging" {

    export interface ParsedAtCommand {
        commands: Object[];
        raw: string;
    }

    export default function parseAtCommand(atCommand: string ): ParsedAtCommand;


}