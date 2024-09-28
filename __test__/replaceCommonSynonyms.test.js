const TextProcessor = require("../core/TextProcessor");

describe("TextProcessor - replaceCommonSynonym", () => {
	let textProcessor;

	beforeEach(() => {
		textProcessor = new TextProcessor();
	});

	test("replaceCommonSynonym should replace word with its most common synonym", async () => {
		const inputWord = "beautiful";
		const expectedOutput = "fair";
		const synonym = await textProcessor.replaceCommonSynonym(inputWord);

		expect(synonym).toBe(expectedOutput);
	});

	test("replaceCommonSynonym should return the original word if no synonym is found", async () => {
		const inputWord = "asdfgh";
		const expectedOutput = "asdfgh";
		const synonym = await textProcessor.replaceCommonSynonym(inputWord);

		expect(synonym).toBe(expectedOutput);
	});

	test("replaceCommonSynonym should throw a TypeError if input is not a string", async () => {
		const input = 123;

		await expect(textProcessor.replaceCommonSynonym(input)).rejects.toThrow(TypeError);
	});

	test("replaceCommonSynonym should throw a TypeError if input contains more than one word", async () => {
		const input = "happy day";

		await expect(textProcessor.replaceCommonSynonym(input)).rejects.toThrow(TypeError);
	});

	test("replaceCommonSynonym should handle an empty string input", async () => {
		const input = "";
		const expectedOutput = "";
		const synonym = await textProcessor.replaceCommonSynonym(input);

		expect(synonym).toBe(expectedOutput);
	});
});
