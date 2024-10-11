const PosTagger = require("./core/PosTagger");
const Tokenizer = require("./core/Tokenizer");
const tagger = new PosTagger();

const testSentence = "I, the quick fox, jumped over the lazy dog, using a trampoline";

console.log("Testing POS Tagging:");
const posResults = tagger.posTagging(testSentence);
console.log("POS Tagging Result:", posResults);

console.log("\nTesting getAdjectives:");
const adjectives = tagger.getAdjectives(testSentence);
console.log("Adjectives:", adjectives);

console.log("\nTesting getNouns:");
const nouns = tagger.getNouns(testSentence);
console.log("Nouns:", nouns);

console.log("\nTesting getVerbs:");
const verbs = tagger.getVerbs(testSentence);
console.log("Verbs:", verbs);

console.log("\nTesting getAdverbs:");
const adverbs = tagger.getAdverbs(testSentence);
console.log("Adverbs:", adverbs);

console.log("\nTesting getConjunctions:");
const conjunctions = tagger.getConjunctions(testSentence);
console.log("Conjunctions:", conjunctions);

console.log("\nTesting getPronouns:");
const pronouns = tagger.getPronouns(testSentence);
console.log("Pronouns:", pronouns);