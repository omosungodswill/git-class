// 1. Create a promise-based function fetchWeather() that simulates fetching weather information for Lagos. 
//      Chain multiple .then() calls to process the result.
// 2. Rewrite the fetchWeather() function using async/await .
// 3. Handle errors by rejecting the promise when the city is not "Lagos" and using try...catch to catch the error.

const fetchWeather = () => {
	return new Promise((resolve)=> {
			resolve({city: "Lagos", 
            temperature: "80", 
            forecast: "Light Rain with Thunder"});
	});
};


fetchWeather().then((weatherInfo) => {
	console.log(`City: ${weatherInfo.city}, Temperature: ${weatherInfo.temperature}, Forecast: ${weatherInfo.forecast}`);
});