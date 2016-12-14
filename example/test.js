"use strict";

var atCommandParser= require("../index");

var cmd= 'ATE0; +CMEE="MM"; +CPMS=,122,,"ABC";I S3=35;^CVOICE=1\r';

console.log("input", JSON.stringify(cmd));

try{

        console.log("output:", JSON.stringify(atCommandParser(cmd), null, 2));

}catch(error){

        console.log(error.message);

}
