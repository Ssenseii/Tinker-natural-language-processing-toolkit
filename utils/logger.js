module.exports = function log(name = "Unnamed Log Function", attributes = {}, error = null) {
	const timestamp = new Date().toISOString();
	const formattedAttributes = JSON.stringify(attributes, null, 2); // Indent for better readability

	let message = `[${timestamp}] ${name}`;
	if (error) {
		message += `\nError: ${error.message}\nStack trace: ${error.stack}`;
	} else {
		message += `\nAttributes: ${formattedAttributes}`;
	}

	throw new TypeError(message);
};
