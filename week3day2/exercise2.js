const fetchWeather = () => {
	return new Promise((resolve)=> {
        resolve({city: "Lagos", 
        temperature: "80", 
        forecast: "Light Rain with Thunder"});
    });
};

async function getWeather() {
	const weatherInfo = await fetchWeather();
	console.log(`City: ${weatherInfo.city}, Temperature: ${weatherInfo.temperature}, Forecast: ${weatherInfo.forecast}`);
}
getWeather();