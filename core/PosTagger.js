/**
 *  1. Tokenization
 *
 *
 * One of the core tasks in Natural Language Processing (NLP) is Parts of Speech (PoS) tagging, which is giving each word in a text a grammatical category, such as nouns, verbs, adjectives, and adverbs.
 *  Through improved comprehension of phrase structure and semantics, this technique makes it possible for machines to study and comprehend human language more accurately.
 *
 *  Current List of Functions:
 *
 * - `posTag(text)`: Perform part-of-speech tagging for a given text.
 * `getNouns(text)`: Extract all nouns from a text.
 * `getVerbs(text)`: Extract all verbs from a text.
 * `getAdjectives(text)`: Extract all adjectives from a text.
 * `getAdverbs(text)`: Extract all adverbs from a text.
 * `getPronouns(text)`: Extract all pronouns from a text.
 * `getPrepositions(text)`: Extract all prepositions from a text.
 * `getConjunctions(text)`: Extract all conjunctions from a text.
 * `getInterjections(text)`: Extract all interjections from a text.
 * `isProperNoun(word)`: Check if a word is a proper noun.
 * `getPosFrequency(text)`: Get the frequency distribution of parts of speech in a text.
 * `findSubject(text)`: Identify the subject in a sentence.
 * `findPredicate(text)`: Identify the predicate in a sentence.
 * `getPosForToken(token)`: Return the part of speech for a given token.
 * `tagPosInSentence(sentence)`: POS tag a single sentence.
 * `isVerbInflected(text)`: Check if a verb in a sentence is inflected.
 *
 */

/**
 *
 *  Imports: Various Libraries / Files / Utilities
 *
 */

const nlp = require("compromise");

/// Utils
const log = require("../utils/logger");

/// Functions / Algorithms

/// Sets, lists and Dictionnaries

/* English */

class PosTagger {
	posTagging(s) {
        let nt;
		try {
			const doc = nlp(s);

			const terms = doc.terms().json();

			nt = terms.map((term) => {
                return {
					word: term.text,
					pos: term.terms[0].tags[0],
				};
			});

			return nt;
		} catch (err) {
			log("Error: TextProcessor - NormalizeText", { input: s, output: nt }, err);
			return s;
		}
	}
}

module.exports = PosTagger;
