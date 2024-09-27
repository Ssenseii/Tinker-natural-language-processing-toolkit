const contractions = require("./lib/contractions/contractions");
const TxtProcessor = require("./core/TxtProcessor");

const txtProcessor = new TxtProcessor();

console.log(txtProcessor.expandContractions("hello they're eating my crumbs"));
