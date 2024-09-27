const TxtProcessor = require("../core/txt-pps"); // Adjust the path as needed

describe("TxtProcessor - cleanText", () => {
	let txtProcessor;

	beforeEach(() => {
		txtProcessor = new TxtProcessor();
	});

	test("should trim whitespace by default", () => {
		const inputText = "   Hello world!   ";
		const expectedOutput = "Hello world!";
		const cleanedText = txtProcessor.cleanText(inputText);

		expect(cleanedText).toBe(expectedOutput);
	});

	test("should remove specified character from the string", () => {
		const inputText = "He.llo wo.rld!";
		const unwantedChar = ".";
		const expectedOutput = "Hello world!";
		const cleanedText = txtProcessor.cleanText(inputText, unwantedChar);

		expect(cleanedText).toBe(expectedOutput);
	});

	test("should return input as is if unwanted character is an empty string", () => {
		const inputText = "   Hello world!   ";
		const unwantedChar = "";
		const expectedOutput = "Hello world!";
		const cleanedText = txtProcessor.cleanText(inputText, unwantedChar);

		expect(cleanedText).toBe(expectedOutput);
	});

	test("should throw an error if input is not a string", () => {
		const inputText = 12345;

		expect(() => {
			txtProcessor.cleanText(inputText);
		}).toThrow(TypeError);
	});

	test("should return text as is if the unwanted character is a space", () => {
		const inputText = "Hello world!";
		const unwantedChar = " ";
		const expectedOutput = "Hello world!";
		const cleanedText = txtProcessor.cleanText(inputText, unwantedChar);

		expect(cleanedText).toBe(expectedOutput);
	});

	test("should handle special characters in unwanted string properly", () => {
		const inputText = "Hel@lo Wo@rld!";
		const unwantedChar = "@";
		const expectedOutput = "Hello World!";
		const cleanedText = txtProcessor.cleanText(inputText, unwantedChar);

		expect(cleanedText).toBe(expectedOutput);
	});
});
