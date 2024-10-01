const TextProcessor = require("../../core/TextProcessor");

describe("TextProcessor", () => {
	let textProcessor;

	beforeEach(() => {
		textProcessor = new TextProcessor();
	});

	describe("detectNegations", () => {
		test("should mark negation words correctly", () => {
			const inputText = "I do not like apples. Nobody enjoys bad weather.";
			const expectedOutput = "I do [/not/] like apples. [/Nobody/] enjoys bad weather.";
			const outputText = textProcessor.detectNegations(inputText);

			expect(outputText).toBe(expectedOutput);
		});

		test("should return the original text if no negation words are present", () => {
			const inputText = "I like apples and oranges.";
			const expectedOutput = "I like apples and oranges.";
			const outputText = textProcessor.detectNegations(inputText);

			expect(outputText).toBe(expectedOutput);
		});

		test("should handle multiple sentences with negations", () => {
			const inputText = "He never goes to the gym. I can hardly believe it.";
			const expectedOutput = "He [/never/] goes to the gym. I can [/hardly/] believe it.";
			const outputText = textProcessor.detectNegations(inputText);

			expect(outputText).toBe(expectedOutput);
		});

		test("should return an empty string when input is an empty string", () => {
			const inputText = "";
			const expectedOutput = "";
			const outputText = textProcessor.detectNegations(inputText);

			expect(outputText).toBe(expectedOutput);
		});

		test("should throw an error for non-string input", () => {
			const inputText = 12345;
			expect(() => {
				textProcessor.detectNegations(inputText);
			}).toThrow(TypeError);
		});

		test("should handle leading and trailing spaces", () => {
			const inputText = "   I do not like this. , this is not what I wanted    ";
			const expectedOutput = "   I do [/not/] like this. , this is [/not/] what I wanted    ";
			const outputText = textProcessor.detectNegations(inputText);

			expect(outputText).toBe(expectedOutput);
		});

		test("should mark multiple negations in the same sentence", () => {
			const inputText = "No one knows nothing about it.";
			const expectedOutput = "[/No/] one knows [/nothing/] about it.";
			const outputText = textProcessor.detectNegations(inputText);

			expect(outputText).toBe(expectedOutput);
		});
	});
});
