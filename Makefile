default: clean
	node ./../../node_modules/jacob/cmd/cmd.js -t lexer.jacoblex -l ./generated/lexer.js -g parser.jacobgram -p ./generated/parser.js
	
clean:
	rm -fr ./generated/*
	
run: 
	node main
