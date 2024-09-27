const TxtProcessor = require("../core/TxtProcessor");

describe("TxtProcessor", () => {
	let txtProcessor;

	beforeEach(() => {
		txtProcessor = new TxtProcessor();
	});


	test("expandContractions should expand known contractions correctly", () => {
		const inputText = "I can't believe it's true!";
		const expectedOutput = "I cannot believe it is true!";
		const expandedText = txtProcessor.expandContractions(inputText);

		expect(expandedText).toBe(expectedOutput);
	});

	test("expandContractions should handle contractions with '/' and choose the first option", () => {
		const inputText = "Who'll've done it.";
		const expectedOutput = "who shall have done it.";
		const expandedText = txtProcessor.expandContractions(inputText);

		expect(expandedText).toBe(expectedOutput);
	});

	test("expandContractions should return the original word if contraction is not in dictionary", () => {
		const inputText = "This books' synopsis.";
		const expectedOutput = "This books' synopsis."; 
		const expandedText = txtProcessor.expandContractions(inputText);

		expect(expandedText).toBe(expectedOutput);
	});

	test("expandContractions should not modify text without contractions", () => {
		const inputText = "This is just a normal sentence.";
		const expectedOutput = "This is just a normal sentence.";
		const expandedText = txtProcessor.expandContractions(inputText);

		expect(expandedText).toBe(expectedOutput);
	});

	test("expandContractions should handle an empty string gracefully", () => {
		const inputText = "";
		const expectedOutput = "";
		const expandedText = txtProcessor.expandContractions(inputText);

		expect(expandedText).toBe(expectedOutput);
	});

	test("expandContractions should handle a string with only spaces gracefully", () => {
		const inputText = "   ";
		const expectedOutput = "";
		const expandedText = txtProcessor.expandContractions(inputText);

		expect(expandedText).toBe(expectedOutput);
	});

	test("expandContractions should throw an error if input is not a string", () => {
		const inputText = 12345;

		expect(() => {
			txtProcessor.expandContractions(inputText);
		}).toThrow(TypeError);
	});

	test("expandContractions should handle a sentence with multiple contractions", () => {
		const inputText = "I can't believe it's happening, but don't worry!";
		const expectedOutput = "I cannot believe it is happening, but do not worry!";
		const expandedText = txtProcessor.expandContractions(inputText);

		expect(expandedText).toBe(expectedOutput);
	});
});
