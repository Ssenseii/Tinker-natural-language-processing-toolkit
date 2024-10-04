const Tokenizer = require("./core/Tokenizer")
const tkner = new Tokenizer;

console.log(typeof 45)
console.log(
	tkner.ngramSentences("This is a big ass Sentence  ?       wit.h many          mobing patr", 2)
);