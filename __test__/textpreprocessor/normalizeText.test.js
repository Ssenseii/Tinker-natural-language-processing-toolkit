const TextProcessor = require("../../core/TextProcessor");

describe("TextProcessor", () => {
	let textProcessor;

	beforeEach(() => {
		textProcessor = new TextProcessor();
	});

	/**
	 *
	 *  Normalize Texts
	 *
	 */

	test("normalizeText should process input string correctly", () => {
		const inputText1 = "This is a sample text with punctuation and capitalization.";
		const expectedOutput = "this is a sample text with punctuation and capitalization";
		const normalizedText1 = textProcessor.normalizeText(inputText1);

		expect(normalizedText1).toBe(expectedOutput);
	});

	test("normalizeText should handle empty string", () => {
		const inputText = "";
		const expectedOutput = "";
		const normalizedText = textProcessor.normalizeText(inputText);

		expect(normalizedText).toBe(expectedOutput);
	});

	test("normalizeText should handle punctuation", () => {
		const inputText = "Hello, world! How's it going?";
		const expectedOutput = "hello world hows it going";
		const normalizedText = textProcessor.normalizeText(inputText);

		expect(normalizedText).toBe(expectedOutput);
	});

	test("normalizeText should handle complex sentences with punctuation", () => {
		const inputText = "Can you believe it? I can! Isn't it great? Yes, it is!";
		const expectedOutput = "can you believe it i can isnt it great yes it is";
		const normalizedText = textProcessor.normalizeText(inputText);

		expect(normalizedText).toBe(expectedOutput);
	});

	test("normalizeText should trim whitespace and reduce multiple spaces", () => {
		const inputText = "   Hello    world!   This is a     test.   ";
		const expectedOutput = "hello world this is a test";
		const normalizedText = textProcessor.normalizeText(inputText);

		expect(normalizedText).toBe(expectedOutput);
	});

	test("normalizeText should handle numbers within text", () => {
		const inputText = "In 2024, the population is expected to reach 8 billion!";
		const expectedOutput = "in 2024 the population is expected to reach 8 billion";
		const normalizedText = textProcessor.normalizeText(inputText);

		expect(normalizedText).toBe(expectedOutput);
	});

	test("normalizeText should ignore special characters", () => {
		const inputText = "Hello @world! How about #testing? Let's see: $100 & more.";
		const expectedOutput = "hello world how about testing lets see 100 more";
		const normalizedText = textProcessor.normalizeText(inputText);

		expect(normalizedText).toBe(expectedOutput);
	});

	test("normalizeText should convert mixed case to lowercase", () => {
		const inputText = "ThIs Is A tEsT Of CaSe Insensitivity!";
		const expectedOutput = "this is a test of case insensitivity";
		const normalizedText = textProcessor.normalizeText(inputText);

		expect(normalizedText).toBe(expectedOutput);
	});

	test("normalizeText should handle long continuous text without line breaks", () => {
		const inputText =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
		const expectedOutput =
			"lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
		const normalizedText = textProcessor.normalizeText(inputText);

		expect(normalizedText).toBe(expectedOutput);
	});

	test("normalizeText should handle emojis and Unicode characters", () => {
		const inputText = "Hello 🌍! How are you? 😊";
		const expectedOutput = "hello how are you";
		const normalizedText = textProcessor.normalizeText(inputText);

		expect(normalizedText).toBe(expectedOutput);
	});

	test("normalizeText should return empty string for input of only punctuation", () => {
		const inputText = "!@#$%^&*()_+-=~`";
		const expectedOutput = "";
		const normalizedText = textProcessor.normalizeText(inputText);

		expect(normalizedText).toBe(expectedOutput);
	});

	test("normalizeText should handle non-English characters", () => {
		const inputText = "C'est la vie! ¿Cómo estás?";
		const expectedOutput = "cest la vie como estas";
		const normalizedText = textProcessor.normalizeText(inputText);

		expect(normalizedText).toBe(expectedOutput);
	});

	test("normalizeText should handle a very large input string", () => {
		const inputText = "This is a very long string. ".repeat(1000);
		const expectedOutput = "this is a very long string ".repeat(1000).trim();
		const normalizedText = textProcessor.normalizeText(inputText);

		expect(normalizedText).toBe(expectedOutput);
	});
});
