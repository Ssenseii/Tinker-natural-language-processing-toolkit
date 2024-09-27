const TxtProcessor = require("../core/TxtProcessor");

describe("TxtProcessor - replaceCommonSynonym", () => {
	let txtProcessor;

	beforeEach(() => {
		txtProcessor = new TxtProcessor();
	});

	test("replaceCommonSynonym should replace word with its most common synonym", async () => {
		const inputWord = "beautiful";
		const expectedOutput = "fair"; 
		const synonym = await txtProcessor.replaceCommonSynonym(inputWord);

		expect(synonym).toBe(expectedOutput);
	});

	test("replaceCommonSynonym should return the original word if no synonym is found", async () => {
		const inputWord = "asdfgh"; 
		const expectedOutput = "asdfgh";
		const synonym = await txtProcessor.replaceCommonSynonym(inputWord);

		expect(synonym).toBe(expectedOutput);
	});

	test("replaceCommonSynonym should throw a TypeError if input is not a string", async () => {
		const input = 123; 

		await expect(txtProcessor.replaceCommonSynonym(input)).rejects.toThrow(
			"TxtProcessor - replaceSynonym(text) |  Input must be a text of type string"
		);
	});

	test("replaceCommonSynonym should throw a TypeError if input contains more than one word", async () => {
		const input = "happy day";

		await expect(txtProcessor.replaceCommonSynonym(input)).rejects.toThrow(
			"TxtProcessor - replaceSynonym(word) |  Input must be one word"
		);
	});

	test("replaceCommonSynonym should handle an empty string input", async () => {
		const input = "";
		const expectedOutput = ""; 
		const synonym = await txtProcessor.replaceCommonSynonym(input);

		expect(synonym).toBe(expectedOutput);
	});

});
