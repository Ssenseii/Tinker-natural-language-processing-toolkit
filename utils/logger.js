const colors = require("colors");

module.exports = function log(name = "Unnamed Log Function", attributes = {}, error = null) {
	const timestamp = new Date().toLocaleString(); 
	const formattedAttributes = JSON.stringify(attributes, null, 3); 
	const startTime = Date.now(); 

	// Colorizing the parts
	let message = colors.red.bold(`Error: ${name}`); // Bold and red for the error name
	message += colors.cyan(`\n${formattedAttributes}`); // Blue for the attributes

	if (error) {
		const executionTime = `${Date.now() - startTime}ms`; // Calculate execution time span

		message += colors.yellow(`\nError Message: ${error.message}`); // Yellow for the error message
		message += colors.blue(`\nTime: ${timestamp}`); // Cyan for the timestamp
		message += colors.blue(`\nExecution Time Span: ${executionTime}`); // Magenta for execution time
		message += colors.gray(`\nStack Trace:\n${error.stack}`); // Gray for stack trace
	}

	throw new TypeError(message);
};
