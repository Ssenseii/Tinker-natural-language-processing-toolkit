const TxtProcessor = require('./core/txt-pps')

const txtProcessor = new TxtProcessor;

// Test case 1: Input string
const inputText1 = "This is a sample text with punctuation and capitalization.";
const normalizedText1 = txtProcessor.normalizeText(inputText1);
console.log("Normalized text 1:", normalizedText1);
