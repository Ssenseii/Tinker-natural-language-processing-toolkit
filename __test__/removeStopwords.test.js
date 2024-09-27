const TxtProcessor = require("../core/TxtProcessor"); 

describe("TxtProcessor", () => {
	let txtProcessor;

	beforeEach(() => {
		txtProcessor = new TxtProcessor();
	});


	/**
	 *  Remove Stopwords
	 */

	test("removeStopwords should remove common stopwords", () => {
		const input = txtProcessor.normalizeText("This is a test sentence with stop words");
		const expected = "test sentence stop words";
		expect(txtProcessor.removeStopwords(input)).toEqual(expected);
	});

	test("removeStopwords should handle empty string", () => {
		const input = "";
		const expected = "";
		expect(txtProcessor.removeStopwords(input)).toEqual(expected);
	});

	test("removeStopwords should remove multiple stopwords", () => {
		const input = "A cat is sitting on a mat and eating a fish";
		const expected = "cat sitting mat eating fish";
		expect(txtProcessor.removeStopwords(input)).toEqual(expected);
	});

	test("removeStopwords should handle edge cases", () => {
		const input = txtProcessor.normalizeText("Hello, world! How are you doing today?");
		const expected = "hello world today";
		expect(txtProcessor.removeStopwords(input)).toEqual(expected);
	});

	test("removeStopwords should handle case sensitivity", () => {
		const input = "The cat is on the mat.";
		const expected = "cat mat.";
		expect(txtProcessor.removeStopwords(input)).toEqual(expected);
	});
});
