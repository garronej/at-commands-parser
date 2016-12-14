"use strict";

var atCommandParser= require("../index");

var cmds= [
        "ATI2 J3 K\r",
        'AT A; +CPMS="SM","SA","AD"; B3\r',
        'AT&Z1; +CPIN?; &Z +CPMS=,122,,"ABC"\r',
        "AT^CVOICE=1;+CMEE=0\r",
        "AT+CREG=2;+COPS=0,0;\r",
        "AT  +CMEE=\"MM\";+CREG=2;S4=92; S5=33 S6=127\r"
];


for( let cmd of cmds){

        try{


                console.log(JSON.stringify(atCommandParser(cmd), null, 2));

        }catch(error){

                console.log(error.message);

        }


}
