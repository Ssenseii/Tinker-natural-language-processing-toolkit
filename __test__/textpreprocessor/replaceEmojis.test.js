const TextProcessor = require("../../core/TextProcessor"); // Assuming your TextProcessor class is in core/TextProcessor.js

describe("TextProcessor - replaceEmojis", () => {
	let textProcessor;

	beforeEach(() => {
		textProcessor = new TextProcessor();
	});

	/**
	 * Test cases for replaceEmojis function
	 */

	test("replaceEmojis should return the original text if no emojis are found", () => {
		const inputText = "Hello there!";
		const expectedOutput = "Hello there!";
		const result = textProcessor.replaceEmojis(inputText);

		expect(result).toBe(expectedOutput);
	});

	test("replaceEmojis should replace a single emoji with its name", () => {
		const inputText = "I am so happy 😀";
		const expectedOutput = "I am so happy grinning face";
		const result = textProcessor.replaceEmojis(inputText);

		expect(result).toBe(expectedOutput);
	});

	test("replaceEmojis should replace multiple emojis with their names", () => {
		const inputText = "I love coding 😄 💻";
		const expectedOutput = "I love coding grinning face with smiling eyes laptop";
		const result = textProcessor.replaceEmojis(inputText);

		expect(result).toBe(expectedOutput);
	});

	test("replaceEmojis should replace emojis even if repeated", () => {
		const inputText = "Smiling faces all around 😀 😀";
		const expectedOutput = "Smiling faces all around grinning face grinning face";
		const result = textProcessor.replaceEmojis(inputText);

		expect(result).toBe(expectedOutput);
	});

	test("replaceEmojis should handle text with only emojis", () => {
		const inputText = "😀 😄 😃";
		const expectedOutput =
			"grinning face grinning face with smiling eyes grinning face with big eyes";
		const result = textProcessor.replaceEmojis(inputText);

		expect(result).toBe(expectedOutput);
	});
});
