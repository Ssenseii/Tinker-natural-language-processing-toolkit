const Tokenizer = require("./core/Tokenizer")
const tkner = new Tokenizer;

console.log(typeof 45)
console.log(
    tkner.splitOnNewline("This is a big ass Sentence  ?       wit.h many          mobing patr", 1000)
);