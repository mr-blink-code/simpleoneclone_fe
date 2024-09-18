function splitStringUsingRegex(inputString) {
    // Array to hold individual characters
    const characters = [];
    
    // Regular expression to match any character, including whitespace and newlines
    const regex = /[\s\S]/gu;
    
    let match;

    // Execute the regex on the input string
    while ((match = regex.exec(inputString)) !== null) {
        // Push each matched character into the array
        characters.push(match[0]);
    }
    
    return characters;
}

export default splitStringUsingRegex;
