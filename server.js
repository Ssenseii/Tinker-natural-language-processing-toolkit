const Tokenizer = require("./core/Tokenizer")
const tkner = new Tokenizer;

console.log(
    tkner.tokenizeSentence("This is a big ass Sentence  ?       wit.h many          mobing patr")
);