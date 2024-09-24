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
 *  `removeStopwords(text)`: Remove common stopwords from a given text.
 *  `stemWords(words)`: Apply stemming to reduce words to their root forms.
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

class TxtProcessor {
	normalizeText(t) {
        // not a string
		if (typeof t !== "string")
			return "TxtProcessor - normalizeText(text) |  Input must be a string";

		// empty string case
		if (t == " " || t == "") return t;

		// step 1: convert uppercase letters.
		let nt = t
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
			.trim()
			.replace(/\s+/g, " ");

		return nt;
	}
}

module.exports = TxtProcessor;
