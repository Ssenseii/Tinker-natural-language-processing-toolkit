const TextProcessor = require("../../core/TextProcessor");

describe("TextProcessor", () => {
	let textProcessor;

	beforeEach(() => {
		textProcessor = new TextProcessor();
	});

	test("removePunctuation should remove punctuation correctly", () => {
		const inputText1 = "Hello, world! How's it going?";
		const expectedOutput1 = "Hello world Hows it going";
		const cleanText1 = textProcessor.removePunctuation(inputText1);

		expect(cleanText1).toBe(expectedOutput1);
	});

	test("removePunctuation should handle text with no punctuation", () => {
		const inputText2 = "No punctuation here";
		const expectedOutput2 = "No punctuation here";
		const cleanText2 = textProcessor.removePunctuation(inputText2);

		expect(cleanText2).toBe(expectedOutput2);
	});

	test("removePunctuation should handle edge cases like empty strings", () => {
		const inputText3 = "";
		const expectedOutput3 = "";
		const cleanText3 = textProcessor.removePunctuation(inputText3);

		expect(cleanText3).toBe(expectedOutput3);
	});
});
