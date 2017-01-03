declare module "at-commands-parser" {

    interface ParsedAtCommand {
        commands: Object[];
        raw: string;
    }

    interface parseAtCommand{
        (atCommand: string): ParsedAtCommand;
    }

    export= parseAtCommand;


}