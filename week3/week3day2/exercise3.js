function fetchWeather(city) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (city === "Lagos") {
				const weatherInfo = ("Rainy");
				resolve(weatherInfo);
			}else{
				reject(new Error(`Weather data for ${city} not found`));
			}
		}, 2000);
	});
}
async function getWeather(city) {
	try {
		const weather = await fetchWeather(city);
		console.log("The weather is " + weather);
	}catch (error) {
		console.error("Error fetching weather information:", error.message);
	}
}


getWeather("Lagos")