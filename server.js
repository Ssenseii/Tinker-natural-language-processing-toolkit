const PosTagger = require("./core/PosTagger");
const Tokenizer = require("./core/Tokenizer")
const posTagger = new PosTagger;

const sentence = "The quick brown fox jumps over the lazy dog.";
const result = posTagger.posTagging(sentence);
console.log(result);

