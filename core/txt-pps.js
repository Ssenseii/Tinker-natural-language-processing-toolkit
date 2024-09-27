/**
 *  1. Text Pre-Processing
 *
 *  Text normalization is a key step in natural language processing (NLP).
 *  It involves cleaning and preprocessing text data to make it consistent and usable for different NLP tasks.
 *  The process includes a variety of techniques, such as case normalization, punctuation removal, stop word removal, stemming, and lemmatization
 *
 *  Current List Of Functions:
 *
 *  `normalizeText(text)`: Convert text to lowercase, remove special characters and punctuation.
 *  `removeStopwords(text, list)`: Remove common stopwords from a given text.
 *  `stemWord(word)`: Apply stemming to reduce words to their root forms.
 *  `lemmatizeWords(words)`: Lemmatize words to get their base dictionary forms.
 *  `cleanText(text)`: Remove unwanted characters, numbers, and extra spaces from text.
 *  `removePunctuation(text)`: Strip punctuation from text.
 *  `replaceSynonyms(text)`: Replace words in the text with their synonyms.
 *  `expandContractions(text)`: Expand common contractions (e.g., "don't" -> "do not").
 *  `lowercaseText(text)`: Convert the entire text to lowercase.
 *  `stripHTMLTags(text)`: Remove any HTML tags from the text.
 *  `detectNegations(text)`: Detect and mark negations in sentences.
 *  `convertEmojis(text)`: Replace emojis with their corresponding text descriptions.
 *  `removeNumbers(text)`: Remove numeric characters from the text.
 *  `normalizeWhitespace(text)`: Reduce multiple spaces to a single space.
 *  `replaceAbbreviations(text)`: Replace abbreviations in text with their full forms.
 *  `sentenceCase(text)`: Capitalize the first letter of each sentence.
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
const stemmer = require("../lib/stemmer/stemmer");

/// Sets, lists and Dictionnaries
const en_stopwords = require("../lib/stopwords/en_stopwords");

/**
 *
 *  Core of the module
 */

class TxtProcessor {
	/// Removes all unnecessary things from the text, keeping only the numbers and lowercase text:
	///  "  Hello World!  " => "hello world"

	normalizeText(t) {
		let nt;
		try {
			// not a string
			if (typeof t !== "string") {
				throw new TypeError(
					"TxtProcessor - removeStopwords(text) |  Input must be a string"
				);
			}

			// empty string case
			if (t.trim() === "") return t;

			// step 1: convert uppercase letters.
			nt = t
				.trim()
				.toLowerCase()

				// step 2: // Remove diacritics (accents)
				.normalize("NFD")
				.replace(/[\u0300-\u036f]/g, "")

				// step 3: remove punctuation
				.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()@]/g, "")

				// step 4: remove special characters
				.replace(/[^\w\s]/g, "")

				// step 5: replace multiple spaces with one
				.replace(/\s+/g, " ")
				.trim();

			return nt;
		} catch (err) {
			log("Error TextProcessor - NormalizeText", { input: t, output: nt }, err);
		}
	}

	/// Takes the list of stopwords provided and removes them from the text
	removeStopwords(t, l = en_stopwords) {
		let ft;
		try {
			/// stopwords words which, due to their high frequency in text, often don’t offer significant insights on their own.
			///  "  Hello World!  " => "hello world"

			if (typeof t !== "string") {
				throw new TypeError(
					"TxtProcessor - removeStopwords(text) |  Input must be a string"
				);
			}

			// empty string case
			if (t == " " || t == "") return t;

			/// search whether the stopwords exist inside the text or not.

			ft = t
				// case sensitivity
				.toLowerCase()

				// get the words
				.split(" ")

				// filter out the stopwords
				.filter((w) => !en_stopwords.has(w))

				// join the filtered words in a string
				.join(" ");

			return ft;
		} catch (err) {
			log("Error: TextProcessor - Remove Stopwords", { input: t, output: ft }, err);
		}
	}

	/// Apply stemming to reduce words to their root forms
	/// using Andargo's javascript implementation
	/// link: https://tartarus.org/martin/PorterStemmer/js.txt

	stemWord(w) {
		try {
			// Not a string
			if (typeof w !== "string") {
				throw new TypeError(
					"TxtProcessor - stemWord(word) |  Input must be a word of type string"
				);
			}

			if (w.trim().split(" ").length > 1) {
				throw new TypeError("TxtProcessor - stemWord(word) |  Input must be one word");
			}

			// Empty string case & less than 3 chars
			if (w.trim() === "") return w;
			if (w.length < 3) return w;

			// the algorithm responsible
			return stemmer(w);
		} catch (err) {
			log("Error: TextProcessor - stemWord", { input: w }, err);
		}
	}

	lemmatizeWord(t) {
		console.log("currently Unimplemented - Coming soon");
	}

	// Basically removes unwanted characters from text, or trims them, or something...
	cleanText(t, u = " ") {
		try {
			if (typeof t !== "string") {
				throw new TypeError(
					"TxtProcessor - cleanText(text) |  Input must be a text of type string"
				);
			}

			if (u === " " || u == "" ) return t.trim();

			const regex = new RegExp(`\\${u}`, "g"); // Creat

			return t.replace(regex, "");
		} catch (err) {
			log("Error: TextProcessor - cleanText", { input: t }, err);
		}
	}
}

module.exports = TxtProcessor;
