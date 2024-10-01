const TextProcessor = require("../../core/TextProcessor");

describe("TextProcessor", () => {
	let textProcessor;

	beforeEach(() => {
		textProcessor = new TextProcessor();
	});

	/**
	 *  Remove Stopwords
	 */

	test("removeStopwords should remove common stopwords", () => {
		const input = textProcessor.normalizeText("This is a test sentence with stop words");
		const expected = "test sentence stop words";
		expect(textProcessor.removeStopwords(input)).toEqual(expected);
	});

	test("removeStopwords should handle empty string", () => {
		const input = "";
		const expected = "";
		expect(textProcessor.removeStopwords(input)).toEqual(expected);
	});

	test("removeStopwords should remove multiple stopwords", () => {
		const input = "A cat is sitting on a mat and eating a fish";
		const expected = "cat sitting mat eating fish";
		expect(textProcessor.removeStopwords(input)).toEqual(expected);
	});

	test("removeStopwords should handle edge cases", () => {
		const input = textProcessor.normalizeText("Hello, world! How are you doing today?");
		const expected = "hello world today";
		expect(textProcessor.removeStopwords(input)).toEqual(expected);
	});

	test("removeStopwords should handle case sensitivity", () => {
		const input = "The cat is on the mat.";
		const expected = "cat mat.";
		expect(textProcessor.removeStopwords(input)).toEqual(expected);
	});
});
