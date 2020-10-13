//The value saved to kelvin will stay constant. Choose the variable type with this in mind. 
const kelvin = 0;

//Use this equation to convert Kelvin to Celsius by subtracting 273 from the kelvin variable
const celsius = kelvin - 273;

//Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.
let fahrenheit = celsius * (9/5) + 32;

//Round down fahrenheit variable
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);