const PosTagger = require("./core/PosTagger");
const Tokenizer = require("./core/Tokenizer");
const posTagger = new PosTagger();

const sentence = "I am who I am";
const result = posTagger.getPronouns(sentence);
