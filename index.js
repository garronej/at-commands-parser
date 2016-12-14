var Lexer = require("./generated/lexer");
var Parser = require('./generated/parser');

var parser = new Parser();
var lexer = new Lexer();


module.exports= function parse(cmd){

        console.log("input", cmd);

        lexer.setInput(cmd);

        var output={};

        try{

                parser.parse(lexer, output);

        }catch(error){


                throw new Error("malformed");

        }


        return output;

};



