//SyntaxError: Identifier 'Base_Url' has already been declared
const Base_Url = "https://api.example.com/data";
const Base_Url = "https://api.demo.com/data";
// This will throw an error because 'Base_Url' has already been declared with 'const'
Base_Url = "https://api.demo.com/data"; 
