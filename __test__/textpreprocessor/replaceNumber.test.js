const TextProcessor = require("../../core/TextProcessor");

describe("TextProcessor", () => {
	let textProcessor;

	beforeEach(() => {
		textProcessor = new TextProcessor();
	});

	/**
	 *
	 * Replace Number
	 *
	 */

	test("replaceNumber should replace single digits with their word equivalents", () => {
		const inputText = "I have 2 apples.";
		const expectedOutput = "I have two apples.";
		const result = textProcessor.replaceNumber(inputText);

		expect(result).toBe(expectedOutput);
	});

	test("replaceNumber should replace multiple digit numbers with their word equivalents", () => {
		const inputText = "I have 123 apples.";
		const expectedOutput = "I have one hundred twenty-three apples.";
		const result = textProcessor.replaceNumber(inputText);

		expect(result).toBe(expectedOutput);
	});

	test("replaceNumber should handle large numbers like millions", () => {
		const inputText = "There are 1000000 stars in the sky.";
		const expectedOutput = "There are one million stars in the sky.";
		const result = textProcessor.replaceNumber(inputText);

		expect(result).toBe(expectedOutput);
	});

	test("replaceNumber should return the same text if there are no numbers", () => {
		const inputText = "I have apples.";
		const expectedOutput = "I have apples.";
		const result = textProcessor.replaceNumber(inputText);

		expect(result).toBe(expectedOutput);
	});

	test("replaceNumber should throw an error if input is not a string", () => {
		expect(() => textProcessor.replaceNumber(12345)).toThrow(TypeError);
	});

	/**
	 *
	 * Remove Numbers
	 *
	 */

	test("removeNumbers should remove all numbers from the text", () => {
		const inputText = "I have 2 apples and 3 bananas.";
		const expectedOutput = "I have  apples and  bananas.";
		const result = textProcessor.removeNumbers(inputText);

		expect(result).toBe(expectedOutput);
	});

	test("removeNumbers should return the same text if there are no numbers", () => {
		const inputText = "I have apples and bananas.";
		const expectedOutput = "I have apples and bananas.";
		const result = textProcessor.removeNumbers(inputText);

		expect(result).toBe(expectedOutput);
	});

	test("removeNumbers should handle text with large numbers", () => {
		const inputText = "There are 1000000 stars in the sky.";
		const expectedOutput = "There are  stars in the sky.";
		const result = textProcessor.removeNumbers(inputText);

		expect(result).toBe(expectedOutput);
	});

	test("removeNumbers should throw an error if input is not a string", () => {
		expect(() => textProcessor.removeNumbers(12345)).toThrow(TypeError);
	});
});
