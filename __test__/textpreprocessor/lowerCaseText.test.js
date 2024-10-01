const TextProcessor = require("../../core/TextProcessor");

describe("TextProcessor", () => {
	let textProcessor;

	beforeEach(() => {
		textProcessor = new TextProcessor();
	});

	/**
	 *
	 * LowerCaseText
	 *
	 */

	test("lowerCaseText should convert string to lowercase and trim whitespace", () => {
		const inputText = "   Hello WORLD!   ";
		const expectedOutput = "hello world!";
		const processedText = textProcessor.lowerCaseText(inputText);

		expect(processedText).toBe(expectedOutput);
	});

	test("lowerCaseText should handle empty string input", () => {
		const inputText = "   ";
		const expectedOutput = "";
		const processedText = textProcessor.lowerCaseText(inputText);

		expect(processedText).toBe(expectedOutput);
	});

	test("lowerCaseText should throw error for non-string input", () => {
		const inputText = 12345;

		expect(() => {
			textProcessor.lowerCaseText(inputText);
		}).toThrowError(
			"TextProcessor - lowerCaseText(text) |  Input must be a text of type string"
		);
	});

	test("lowerCaseText should return lowercase for string input without spaces", () => {
		const inputText = "TESTING";
		const expectedOutput = "testing";
		const processedText = textProcessor.lowerCaseText(inputText);

		expect(processedText).toBe(expectedOutput);
	});
});
