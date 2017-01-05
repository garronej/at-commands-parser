import { atCommandsParser } from "at-commands-parser";
import { ParsedAtCommand } from "at-commands-parser";
import { AtCommandImplementations } from "at-commands-parser";


let cmd= 'ATE0; +CMEE="MM"; +CPMS=,122,,"ABC";I S3=35;^CVOICE=1\r';

console.log("input", JSON.stringify(cmd));

let parsedAtCommand: ParsedAtCommand;

try{

    parsedAtCommand= atCommandsParser(cmd);


}catch(error){

        console.log(error.message);

}

for(let atCommand of parsedAtCommand.commands ){

    console.log(atCommand);

    switch( atCommand.type ){
        case "general":
            let general= <AtCommandImplementations.General>atCommand;
            switch( general.subtype ){
                case "setOrExec":
                    let setOrExec= <AtCommandImplementations.GeneralSetOrExec>general;
                    break;
                case "read": 
                    let read= <AtCommandImplementations.GeneralRead>general;
                    break;
                case "exec":
                    let exec= <AtCommandImplementations.GeneralExec>general;
                    break;
                case "test": 
                    let test= <AtCommandImplementations.GeneralTest>general;
                    break;
                default: throw new Error(general.subtype);
            }

            break;
        case "sRegister":

            let sRegister= <AtCommandImplementations.SRegister>atCommand;

            switch( sRegister.subtype ){
                case "set":
                let set= <AtCommandImplementations.SRegisterSet>sRegister;
                break;
                case "read":
                let read= <AtCommandImplementations.SRegisterRead>sRegister;
                break;
                default: throw new Error(sRegister.subtype);
            }

            break;
        case "basic":
            let basic= <AtCommandImplementations.Basic>atCommand;
            break;
        default: throw new Error(atCommand.type);
    }

}
