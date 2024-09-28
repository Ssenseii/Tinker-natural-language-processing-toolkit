const TextProcessor = require("../core/TextProcessor");

describe("TextProcessor", () => {
	let textProcessor;

	beforeEach(() => {
		textProcessor = new TextProcessor();
	});

	/**
	 *
	 * Normalize Whitespace
	 *
	 */

	test("normalizeWhitespace should replace multiple spaces with a single space", () => {
		const inputText = "This   is  a   test.";
		const expectedOutput = "This is a test.";
		const result = textProcessor.normalizeWhitespace(inputText);

		expect(result).toBe(expectedOutput);
	});

	test("normalizeWhitespace should trim leading and trailing spaces", () => {
		const inputText = "   Hello, World!   ";
		const expectedOutput = "Hello, World!";
		const result = textProcessor.normalizeWhitespace(inputText);

		expect(result).toBe(expectedOutput);
	});

	test("normalizeWhitespace should return an empty string if input is empty or only spaces", () => {
		const inputText = "   ";
		const expectedOutput = "";
		const result = textProcessor.normalizeWhitespace(inputText);

		expect(result).toBe(expectedOutput);
	});

	test("normalizeWhitespace should throw a TypeError for non-string input", () => {
		const inputText = 123; // Example of a non-string input
		expect(() => textProcessor.normalizeWhitespace(inputText)).toThrow(TypeError);
	});

	test("normalizeWhitespace should return the same string if it has no extra whitespace", () => {
		const inputText = "No extra whitespace.";
		const expectedOutput = "No extra whitespace.";
		const result = textProcessor.normalizeWhitespace(inputText);

		expect(result).toBe(expectedOutput);
	});
});
