const fetchWeather = (state) => {
	return new Promise((resolve, reject)=> {
		setTimeout(() => {
            resolve("Cloudy")  
        }, 2000) 
	})
};

const printWeather = async () => {
    console.log("Fetch Weather Information")
    const weather = await fetchWeather("Lagos")
    console.log("The weather is " + weather)
}

printWeather()