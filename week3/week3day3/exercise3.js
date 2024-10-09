const fetchData = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    reject(new Error("404 Page not found"))}, 5000)
    });
};

fetchData().then((file) => {
    console.log(file)
    })
    .catch((error) => {
    console.log("Error:", error.message); 
});