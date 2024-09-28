const contractions = require("./lib/contractions/contractions");
const TextProcessor = require("./core/TextProcessor");

const textProcessor = new TextProcessor();

console.log(textProcessor.expandContractions("hello they're eating my crumbs"));
