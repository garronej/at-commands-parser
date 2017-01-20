var atCommandsParser= require("../index").atCommandsParser;

var cmd= 'ATE0; +CMEE="MM"; +CPMS=,122,,"ABC";I S3=35;^CVOICE=1; +CNUM; +CPIN?\r';

console.log("input", JSON.stringify(cmd));

try{

        console.log("output:", JSON.stringify(atCommandsParser(cmd), null, 2));

}catch(error){

        console.log(error.message);

}

cmd= '0891683108608805F931000B813109731147F40000FF04F4F29C0E\u001a';

console.log("input", JSON.stringify(cmd));

try{

        console.log("output:", JSON.stringify(atCommandsParser(cmd), null, 2));

}catch(error){

        console.log(error.message);

}


cmd= 'A/\r';

console.log("input", JSON.stringify(cmd));

try{

        console.log("output:", JSON.stringify(atCommandsParser(cmd), null, 2));

}catch(error){

        console.log(error.message);

}