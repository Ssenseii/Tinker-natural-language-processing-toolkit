/**
 *  1. Tokenization
 *
 *
 * Tokenization is the process of breaking down text into smaller, meaningful units, known as tokens.
 * These tokens can be words, sentences, or even individual characters, depending on the level of tokenization.
 * The process is a fundamental step in natural language processing (NLP) and text analysis.
 *
 *  Current List of Functions:
 *
 * `tokenizeWords(text)`: Split the input text into individual words.
 * `tokenizeSentences(text)`: Split text into individual sentences.
 * `nGramTokenize(text, n)`: Tokenize text into n-grams (e.g., bi-grams, tri-grams).
 * `charTokenize(text)`: Tokenize text into individual characters.
 * `subwordTokenize(text)`: Tokenize text into subword units using Byte-Pair Encoding.
 * `tokenizeOnPunctuation(text)`: Tokenize text by punctuation marks.
 * `customDelimiterTokenize(text, delimiter)`: Tokenize text based on a custom delimiter.
 * `splitOnNewline(text)`: Split text on newlines.
 * `whitespaceTokenize(text)`: Tokenize text by whitespace.
 * `splitOnComma(text)`: Tokenize text based on commas.
 * `splitOnPeriod(text)`: Split text on periods to break down sentences.
 * `ngramWords(text, n)`: Generate n-grams for a given text.
 * `ngramSentences(text, n)`: Generate n-grams for sentences.
 * `cleanAndTokenize(text)`: Clean and tokenize text in one step.
 * `removeEmptyTokens(tokens)`: Remove empty tokens from the result.
 * `countTokens(tokens)`: Count the number of tokens in the result.
 *
 *  What to look for after:
 *      - Multi-language support
 */

/**
 *
 *  Imports: Various Libraries / Files / Utilities
 *
 */

/// Utils
const log = require("../utils/logger");

/// Functions / Algorithms
const TextProcessor = require("./TextProcessor");
let txtpps = new TextProcessor();

/// Sets, lists and Dictionnaries

/* English */

class Tokenizer {
	tokenizeChars(t) {
		let nt;
		try {
			// not a string
			if (typeof t !== "string") {
				throw new TypeError("Tokenize - tokenizeChars(text) |  Input must be a string");
			}

			// empty string case
			if (t.trim() === "") return t;

			nt = txtpps.normalizeWhitespace(t).split("");

			return nt;
		} catch (err) {
			log("Error: Tokenizer - tokenizeChars", { input: t, output: nt }, err);
			return t;
		}
	}

	tokenizeWords(t) {
		let nt;
		try {
			// not a string
			if (typeof t !== "string") {
				throw new TypeError("Tokenize - tokenizeWords(text) |  Input must be a string");
			}

			// empty string case
			if (t.trim() === "") return t;

			nt = txtpps.normalizeWhitespace(t).match(/\b\w+\b/g);

			return nt;
		} catch (err) {
			log("Error: Tokenizer - tokenizeWords", { input: t, output: nt }, err);
			return t;
		}
	}

	tokenizeSentence(t) {
		let nt;
		try {
			// not a string
			if (typeof t !== "string") {
				throw new TypeError("Tokenize - tokenizeSentence(text) |  Input must be a string");
			}

			// empty string case
			if (t.trim() === "") return t;

			nt = txtpps.normalizeWhitespace(t).match(/[^.!?]+[.!?]+[\])'"`]*|.+$/g);

			return nt;
		} catch (err) {
			log("Error: Tokenizer - tokenizeSentence", { input: t, output: nt }, err);
			return t;
		}
	}

	/// Using Byte-Pair Encoding
	subwordTokenize(t, vocabSize) {
		let nt;
		try {
			// not a string
			if (typeof t !== "string") {
				throw new TypeError(
					"Tokenize - subwordTokenize(text, vocabSize) |  Input must be a string"
				);
			}

			if (typeof vocabSize !== "number") {
				throw new TypeError(
					"Tokenize - subwordTokenize(text, vocabSize) |  VocabSize must be a Integer"
				);
			}

			// empty string case
			if (t.trim() === "") return t;

			// Initialize vocabulary with characters from the text
			let vocab = {};
			let words = t.split(/\s+/).map((word) => word.split(""));

			// Function to count the frequency of pairs
			const getPairs = (words) => {
				let pairs = {};
				for (let w of words) {
					for (let i = 0; i < w.length - 1; i++) {
						const pair = w[i] + " " + w[i + 1];
						if (!pairs[pair]) {
							pairs[pair] = 0;
						}
						pairs[pair]++;
					}
				}
				return pairs;
			};

			// Create a simple string representation for each word
			const joinWords = (words) => words.map((w) => w.join("")).join(" ");

			// Main BPE loop to merge pairs
			while (Object.keys(vocab).length < vocabSize) {
				let pairs = getPairs(words);
				if (!Object.keys(pairs).length) break; // No more pairs to merge

				// Find the most frequent pair
				let bestPair = Object.keys(pairs).reduce((a, b) => (pairs[a] > pairs[b] ? a : b));

				// Merge the most frequent pair in all words
				words = words.map((word) => {
					let newWord = [];
					let i = 0;
					while (i < word.length) {
						if (i < word.length - 1 && word[i] + " " + word[i + 1] === bestPair) {
							newWord.push(word[i] + word[i + 1]); // Merge pair
							i += 2;
						} else {
							newWord.push(word[i]);
							i++;
						}
					}
					return newWord;
				});

				// Add the new pair to the vocabulary
				vocab[bestPair.replace(" ", "")] = true;
			}

			return (nt = {
				vocabulary: vocab,
				tokenizedText: joinWords(words),
			});
		} catch (err) {
			log("Error: Tokenizer - subwordTokenize", { input: t, output: nt }, err);
			return t;
		}
	}

	tokenizeOnPunctuation(t) {
		let nt;
		try {
			// not a string
			if (typeof t !== "string") {
				throw new TypeError(
					"Tokenize - tokenizeOnPunctuation(text) |  Input must be a string"
				);
			}

			// empty string case
			if (t.trim() === "") return t;

			nt = txtpps.normalizeWhitespace(t).split(/[.,!?;:(){}[\]'"-\s]+/);

			return nt;
		} catch (err) {
			log("Error: Tokenizer - tokenizeOnPunctuation", { input: t, output: nt }, err);
			return t;
		}
	}

	splitOnNewline(t) {
		let nt;
		try {
			// not a string
			if (typeof t !== "string") {
				throw new TypeError("Tokenize - splitOnNewline(text) |  Input must be a string");
			}

			// empty string case
			if (t.trim() === "") return t;

			nt = txtpps.normalizeWhitespace(t).split(/\n/);

			return nt;
		} catch (err) {
			log("Error: Tokenizer - splitOnNewline", { input: t, output: nt }, err);
			return t;
		}
	}

	whitespaceTokenize(t) {
		let nt;

		try {
			// not a string
			if (typeof t !== "string") {
				throw new TypeError(
					"Tokenize - whitespaceTokenize(text) |  Input must be a string"
				);
			}

			// empty string case
			if (t.trim() === "") return t;

			nt = t.split(" ");

			return nt;
		} catch (err) {
			log("Error: Tokenizer - whitespaceTokenize", { input: t, output: nt }, err);
			return t;
		}
	}

	splitOnComma(t) {
		let nt;

		try {
			// not a string
			if (typeof t !== "string") {
				throw new TypeError("Tokenize - splitOnComma(text) |  Input must be a string");
			}

			// empty string case
			if (t.trim() === "") return t;

			nt = t.split(",");

			return nt;
		} catch (err) {
			log("Error: Tokenizer - splitOnComma", { input: t, output: nt }, err);
			return t;
		}
	}

	splitOnPeriod(t) {
		let nt;

		try {
			// not a string
			if (typeof t !== "string") {
				throw new TypeError("Tokenize - splitOnPeriod(text) |  Input must be a string");
			}

			// empty string case
			if (t.trim() === "") return t;

			nt = t.split(".");

			return nt;
		} catch (err) {
			log("Error: Tokenizer - splitOnPeriod", { input: t, output: nt }, err);
			return t;
		}
	}
}

module.exports = Tokenizer;
