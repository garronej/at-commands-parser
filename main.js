"use strict";

var Lexer = require("./generated/lexer");
var Parser = require('./generated/parser');

var parser = new Parser();
var lexer = new Lexer();

/*

var cmds= [
        "AT+CPMS=\"SM\",\"SM\",\"SM\"\r",
        "AT+CGMI\r",
        "AT+CMEE=0\r",
        "AT+CPIN?\r",
        "AT+COPS=0,0\r",
        "AT+CREG=2\r",
        "AT^CVOICE?\r",
        "AT+CPMS=0,122,222\r",
        "AT+CPMS=,122,222\r",
        "AT\r",
        "ATZ\r",
        "ATE0\r"
];

*/

/*
var cmds= [
        "ATBasicA BasicB GeneralC; GeneralD; BasicE BasicF; GeneralG;\r",
        "ATGeneralA;\r",
        "ATGeneralA;BasicB\r",
        "ATGeneralA;BasicB;\r",
        "ATGeneralA;BasicB GeneralC\r",
];
*/


var cmds= [
        "ATI2 J3 K\r",
        'AT A; +CPMS="SM","SA","AD"; B3\r',
        'AT&Z1; +CPIN?; &Z +CPMS=,122,,"ABC"\r',
        "AT^CVOICE=1;+CMEE=0\r",
        "AT+CREG=2;+COPS=0,0;\r",
        "AT  +CMEE=\"MM\";+CREG=2;S4=92; S5=33 S6=127\r"
];


for( let cmd of cmds){

        console.log("input: ", [cmd]);

        lexer.setInput(cmd);


        var output={};

        try{

                parser.parse(lexer, output);

        }catch(error){

                console.log("fail: ",cmd);

                throw error;

        }

        console.log(JSON.stringify(output, null, 2));



}



