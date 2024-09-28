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
 *  `replaceCommonSynonym(text)`: Replace word with its most common synonym.
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

const emojiData = require("../lib/emojis/emojiMap");

/* English */
const en_stopwords = require("../lib/stopwords/en_stopwords");
const en_dict_contractions = require("../lib/contractions/en_contractions");
const en_negation_words = require("../lib/negation/en_negation_words");

/**
 *
 *  Core of the module
 */

class TextProcessor {
	/// Removes all unnecessary things from the text, keeping only the numbers and lowercase text:
	///  "  Hello World!  " => "hello world"

	normalizeText(t) {
		let nt;
		try {
			// not a string
			if (typeof t !== "string") {
				throw new TypeError(
					"TextProcessor - removeStopwords(text) |  Input must be a string"
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
			log("Error: TextProcessor - NormalizeText", { input: t, output: nt }, err);
			return t;
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
					"TextProcessor - removeStopwords(text) |  Input must be a string"
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
			return t;
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
					"TextProcessor - stemWord(word) |  Input must be a word of type string"
				);
			}

			if (w.trim().split(" ").length > 1) {
				throw new TypeError("TextProcessor - stemWord(word) |  Input must be one word");
			}

			// Empty string case & less than 3 chars
			if (w.trim() === "") return w;
			if (w.length < 3) return w;

			// the algorithm responsible
			return stemmer(w);
		} catch (err) {
			log("Error: TextProcessor - stemWord(word)", { input: w }, err);
			return w;
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
					"TextProcessor - cleanText(text) |  Input must be a text of type string"
				);
			}

			if (u === " " || u == "") return t.trim();

			const regex = new RegExp(`\\${u}`, "g"); // Creat

			return t.replace(regex, "");
		} catch (err) {
			log("Error: TextProcessor - cleanText(text)", { input: t }, err);
			return t;
		}
	}

	// Remove Punctuation from text
	removePunctuation(t) {
		try {
			if (typeof t !== "string") {
				throw new TypeError(
					"TextProcessor - removePunctuation(text) |  Input must be a text of type string"
				);
			}

			if (t === " " || t == "") return t.trim();

			return t.replace(/[.,\/#?!$%\^&\*;:{}=\-_`~()'"]/g, "");
		} catch (err) {
			log("Error: TextProcessor - removePunctuation(text)", { input: t }, err);
			return t;
		}
	}

	// replace words with their most common synonym.
	async replaceCommonSynonym(w) {
		try {
			if (typeof w !== "string") {
				throw new TypeError(
					"TextProcessor - replaceCommonSynonym(word) |  Input must be a text of type string"
				);
			}

			if (w === " " || w == "") return w.trim();

			if (w.trim().split(" ").length > 1) {
				throw new TypeError(
					"TextProcessor - replaceCommonSynonym(word) |  Input must be one word"
				);
			}

			const response = await fetch(`https://api.datamuse.com/words?rel_syn=${w}&max=1`);
			const data = await response.json();

			return data.length > 0 ? data[0].word : w;
		} catch (err) {
			log("Error: TextProcessor - replaceCommonSynonym(word)", { input: w }, err);
			return w;
		}
	}

	/// Expands contractions like "they're" to they are.
	expandContractions(t) {
		let ft;
		try {
			if (typeof t !== "string") {
				throw new TypeError(
					"TextProcessor - replaceSynonym(t) |  Input must be a text of type string"
				);
			}

			if (t.trim() === "") return t.trim();

			ft = t
				.split(" ")
				.map((w) => {
					if (w.includes("'") && en_dict_contractions[w.toLowerCase()]) {
						let expanded = en_dict_contractions[w.toLowerCase()].split("/")[0]; // Take the first part if there's a '/'
						return expanded.trim();
					}
					return w;
				})
				.join(" "); /// TODO: make it return variations of the words that has multiple expansions

			return ft;
		} catch (err) {
			log("Error: TextProcessor - replaceSynonym(t)", { input: t, output: ft }, err);
			return t;
		}
	}

	/// LowerCase Text (like???)
	lowerCaseText(t) {
		let ft;
		try {
			if (typeof t !== "string") {
				throw new TypeError(
					"TextProcessor - lowerCaseText(text) |  Input must be a text of type string"
				);
			}

			if (t.trim() === "") return t.trim();

			return (ft = t.toLowerCase().trim());
		} catch (err) {
			log("Error: TextProcessor - lowerCaseText(text)", { input: t, output: ft }, err);
			return t;
		}
	}

	/// Remove HTML tags from a text.
	stripHTMLTags(t) {
		let ft;
		try {
			if (typeof t !== "string") {
				throw new TypeError(
					"TextProcessor - stripHTMLTags(text) |  Input must be a text of type string"
				);
			}

			if (t.trim() === "") return t.trim();

			return (ft = t.replace(/<[^>]+>/g, "").trim());
		} catch (err) {
			log("Error: TextProcessor - stripHTMLTags(text)", { input: t, output: ft }, err);
			return t;
		}
	}

	/// Detect and mark negations in a text.
	detectNegations(t) {
		let ft;
		try {
			if (typeof t !== "string") {
				throw new TypeError("Input must be a text of type string");
			}

			if (t.trim() === "") return t.trim();

			const sentences = t.split(/(?<=[.!?])\s+/);

			const markedSentences = sentences.map((sentence) => {
				const words = sentence.split(" ");
				const markedWords = words.map((word) => {
					// Check if the word is a negation
					if (en_negation_words.has(word.toLowerCase())) {
						return `[/${word}/]`; // [/Not/]
					}
					return word;
				});

				return markedWords.join(" ");
			});

			let ft = markedSentences.join(" ");
			return ft;
		} catch (err) {
			log("Error: TextProcessor - detectNegations(text)", { input: t, output: ft }, err);
			return t;
		}
	}

	/// Replace Emojis to their original words

	// Function to replace emojis in text
	replaceEmojis(t) {
		
		let ft = t;
		
		try {
			if (typeof t !== "string") {
				throw new TypeError("Input must be a text of type string");
			}

			// Regular expression to match emojis
			const emojiRegex = /([\u203C-\u3299]|[\uD83C-\uDBFF\uDC00-\uDFFF]+)/g;
			const emojis = t.match(emojiRegex); // Extract all emojis

			if (!emojis) return t; // Return original text if no emojis are found

			// Replace each emoji with its corresponding name

			emojis.forEach((emoji) => {
				const emojiName = emojiData[emoji] || emoji; // Use the name from the map or the original emoji
				ft = ft.replace(new RegExp(emoji, "g"), emojiName);
			});

			return ft;
			
		} catch (err) {
			log("Error: TextProcessor - detectNegations(text)", { input: t, output: ft }, err);
			return t; 
		}
	}
}

module.exports = TextProcessor;
