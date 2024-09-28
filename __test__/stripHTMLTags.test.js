const TextProcessor = require("../core/TextProcessor");

describe("TextProcessor", () => {
	let textProcessor;

	beforeEach(() => {
		textProcessor = new TextProcessor();
	});

	/**
	 *
	 *  stripHTMLTags Tests
	 *
	 */

	test("stripHTMLTags should remove HTML tags from a string", () => {
		const inputText = "<p>This is a <strong>test</strong> string.</p>";
		const expectedOutput = "This is a test string.";
		const strippedText = textProcessor.stripHTMLTags(inputText);

		expect(strippedText).toBe(expectedOutput);
	});

	test("stripHTMLTags should return an empty string when input is an empty string", () => {
		const inputText = "";
		const expectedOutput = "";
		const strippedText = textProcessor.stripHTMLTags(inputText);

		expect(strippedText).toBe(expectedOutput);
	});

	test("stripHTMLTags should return an empty string when input is a string of spaces", () => {
		const inputText = "     ";
		const expectedOutput = "";
		const strippedText = textProcessor.stripHTMLTags(inputText);

		expect(strippedText).toBe(expectedOutput);
	});

	test("stripHTMLTags should throw an error if input is not a string", () => {
		const inputText = 12345; // Not a string

		expect(() => {
			textProcessor.stripHTMLTags(inputText);
		}).toThrow(TypeError);
	});

	test("stripHTMLTags should handle nested HTML tags correctly", () => {
		const inputText =
			"<div><p>Nested <a href='#'>links</a> and <strong>bold</strong> text.</p></div>";
		const expectedOutput = "Nested links and bold text.";
		const strippedText = textProcessor.stripHTMLTags(inputText);

		expect(strippedText).toBe(expectedOutput);
	});

	test("stripHTMLTags should handle strings with no HTML tags correctly", () => {
		const inputText = "This string has no HTML tags.";
		const expectedOutput = "This string has no HTML tags.";
		const strippedText = textProcessor.stripHTMLTags(inputText);

		expect(strippedText).toBe(expectedOutput);
	});

	test("stripHTMLTags should handle empty HTML tags correctly", () => {
		const inputText = "<br/><img src='image.jpg' alt='image' />";
		const expectedOutput = ""; // Assuming we want to remove these as well
		const strippedText = textProcessor.stripHTMLTags(inputText);

		expect(strippedText).toBe(expectedOutput);
	});

	test("stripHTMLTags should handle HTML comments", () => {
		const inputText = "<!-- This is a comment --><p>Visible text.</p>";
		const expectedOutput = "Visible text.";
		const strippedText = textProcessor.stripHTMLTags(inputText);

		expect(strippedText).toBe(expectedOutput);
	});
});
