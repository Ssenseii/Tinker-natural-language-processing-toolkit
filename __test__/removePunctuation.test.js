const TxtProcessor = require("../core/TxtProcessor");

describe("TxtProcessor", () => {
	let txtProcessor;

	beforeEach(() => {
		txtProcessor = new TxtProcessor();
	});

	test("removePunctuation should remove punctuation correctly", () => {
		const inputText1 = "Hello, world! How's it going?";
		const expectedOutput1 = "Hello world Hows it going";
		const cleanText1 = txtProcessor.removePunctuation(inputText1);

		expect(cleanText1).toBe(expectedOutput1);
	});

	test("removePunctuation should handle text with no punctuation", () => {
		const inputText2 = "No punctuation here";
		const expectedOutput2 = "No punctuation here";
		const cleanText2 = txtProcessor.removePunctuation(inputText2);

		expect(cleanText2).toBe(expectedOutput2);
	});

	test("removePunctuation should handle edge cases like empty strings", () => {
		const inputText3 = "";
		const expectedOutput3 = "";
		const cleanText3 = txtProcessor.removePunctuation(inputText3);

		expect(cleanText3).toBe(expectedOutput3);
	});
});
