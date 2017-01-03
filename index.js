var Lexer = require("./generatedJs/Lexer");
var Parser = require('./generatedJs/Parser');

var parser = new Parser();
var lexer = new Lexer();


function parse(cmd){

        lexer.setInput(cmd);

        var output={};

        try{

                parser.parse(lexer, output);

        }catch(error){


                throw new Error("malformed");

        }


        return output;

};

module.exports= { "atCommandsParser": parse };



