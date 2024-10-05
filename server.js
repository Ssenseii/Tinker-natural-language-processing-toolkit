const PosTagger = require("./core/PosTagger");
const Tokenizer = require("./core/Tokenizer")
const posTagger = new PosTagger;

const sentence = "I am who I am";
const pos = posTagger.posTagging(sentence);
const result = posTagger.getVerbs(sentence);
console.log(pos);
console.log(result);

