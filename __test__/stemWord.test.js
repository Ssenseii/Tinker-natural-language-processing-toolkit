// __tests__/txt-pps.test.js
const TxtProcessor = require("../core/txt-pps"); // Adjust the path as needed

describe("TxtProcessor", () => {
	let txtProcessor;

	beforeEach(() => {
		txtProcessor = new TxtProcessor();
	});


	/**
	 * 	StemWord
	 */

    test("stemWord should return stemmed version of the word", () => {
		const inputWord1 = "running";
		const expectedOutput1 = "run"; // Assuming stemmer('running') returns 'run'
		const stemmedWord1 = txtProcessor.stemWord(inputWord1);

		expect(stemmedWord1).toBe(expectedOutput1);
	});

	test("stemWord should return the word if it is less than 3 characters long", () => {
		const inputWord = "go";
		const expectedOutput = "go";
		const stemmedWord = txtProcessor.stemWord(inputWord);

		expect(stemmedWord).toBe(expectedOutput);
	});

	test("stemWord should return the word if it is an empty string", () => {
		const inputWord = "";
		const expectedOutput = "";
		const stemmedWord = txtProcessor.stemWord(inputWord);

		expect(stemmedWord).toBe(expectedOutput);
	});

	test("stemWord should throw an error if input is not a string", () => {
		const inputWord = 12345;

		expect(() => {
			txtProcessor.stemWord(inputWord);
		}).toThrow(TypeError);
	});

	test("stemWord should throw an error if input contains more than one word", () => {
		const inputWord = "multiple words";

		expect(() => {
			txtProcessor.stemWord(inputWord);
		}).toThrow(TypeError);
	});

});
