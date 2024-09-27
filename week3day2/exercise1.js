// 1. Create a promise-based function fetchWeather() that simulates fetching weather information for Lagos. 
//      Chain multiple .then() calls to process the result.
// 2. Rewrite the fetchWeather() function using async/await .
// 3. Handle errors by rejecting the promise when the city is not "Lagos" and using try...catch to catch the error.

const fetchWeather = (state) => {
	return new Promise((resolve, reject)=> {
		if (state !== "lagos") {
            reject("This is an invalid state")
        }	
        resolve("Cloudy");
	});
};

 console.log(fetchWeather("lagos"))
