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
let txtpps = new TextProcessor;

/// Sets, lists and Dictionnaries

/* English */



class Tokenizer{
    

    tokenizeChars(t){
        let nt;
		try {
			// not a string
			if (typeof t !== "string") {
				throw new TypeError(
					"Tokenize - tokenizeChars(text) |  Input must be a string"
				);
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

    tokenizeWords(t){
        let nt;
		try {
			// not a string
			if (typeof t !== "string") {
				throw new TypeError(
					"Tokenize - tokenizeWords(text) |  Input must be a string"
				);
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


    tokenizeSentence(t){
        let nt;
		try {
			// not a string
			if (typeof t !== "string") {
				throw new TypeError(
					"Tokenize - tokenizeSentence(text) |  Input must be a string"
				);
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

}

module.exports = Tokenizer;