const TextProcessor = require("../core/TextProcessor");

describe("TextProcessor - sentenceCase", () => {
	let textProcessor;

	beforeEach(() => {
		textProcessor = new TextProcessor();
	});

	test("should capitalize the first letter of each sentence", () => {
		const inputText = "hello world. this is a test.";
		const expectedOutput = "Hello World. This Is A Test.";
		const processedText = textProcessor.sentenceCase(inputText);

		expect(processedText).toBe(expectedOutput);
	});

	test("should handle input with extra spaces between sentences", () => {
		const inputText = "  hello world.    this is another test.  ";
		const expectedOutput = "Hello World.    This Is Another Test.";
		const processedText = textProcessor.sentenceCase(inputText);

		expect(processedText).toBe(expectedOutput);
	});

	test("should return empty string when input is empty", () => {
		const inputText = "";
		const expectedOutput = "";
		const processedText = textProcessor.sentenceCase(inputText);

		expect(processedText).toBe(expectedOutput);
	});

	test("should handle input with no punctuation", () => {
		const inputText = "hello world this is a test";
		const expectedOutput = "Hello World This Is A Test";
		const processedText = textProcessor.sentenceCase(inputText);

		expect(processedText).toBe(expectedOutput);
	});

    test("should throw an error if input is not a string", () => {
		expect(() => textProcessor.sentenceCase(12345)).toThrow(TypeError);
	});
});
