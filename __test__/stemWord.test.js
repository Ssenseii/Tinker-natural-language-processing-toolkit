const TextProcessor = require("../core/TextProcessor");

describe("TextProcessor", () => {
	let textProcessor;

	beforeEach(() => {
		textProcessor = new TextProcessor();
	});

	/**
	 * 	StemWord
	 */

	test("stemWord should return stemmed version of the word", () => {
		const inputWord1 = "running";
		const expectedOutput1 = "run"; // Assuming stemmer('running') returns 'run'
		const stemmedWord1 = textProcessor.stemWord(inputWord1);

		expect(stemmedWord1).toBe(expectedOutput1);
	});

	test("stemWord should return the word if it is less than 3 characters long", () => {
		const inputWord = "go";
		const expectedOutput = "go";
		const stemmedWord = textProcessor.stemWord(inputWord);

		expect(stemmedWord).toBe(expectedOutput);
	});

	test("stemWord should return the word if it is an empty string", () => {
		const inputWord = "";
		const expectedOutput = "";
		const stemmedWord = textProcessor.stemWord(inputWord);

		expect(stemmedWord).toBe(expectedOutput);
	});

	test("stemWord should throw an error if input is not a string", () => {
		const inputWord = 12345;

		expect(() => {
			textProcessor.stemWord(inputWord);
		}).toThrow(TypeError);
	});

	test("stemWord should throw an error if input contains more than one word", () => {
		const inputWord = "multiple words";

		expect(() => {
			textProcessor.stemWord(inputWord);
		}).toThrow(TypeError);
	});
});
