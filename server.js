const Tokenizer = require("./core/Tokenizer")
const tkner = new Tokenizer;

console.log(typeof 45)
console.log(
	tkner.removeEmptyToken(["", "ref", " ", "dsdsds"])
);