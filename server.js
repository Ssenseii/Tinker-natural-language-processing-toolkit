const TxtProcessor = require("./core/txt-pps");

const txtProcessor = new TxtProcessor();

let result = txtProcessor.removeStopwords(
	132
);

console.log(result);
