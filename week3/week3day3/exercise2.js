const fetchData = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    reject(new Error("Data cannot be retrieved"))}, 5000); 
        });
};

async function getData() { 
    try {
    const data = await fetchData();
    console.log(data) 
        } 
    catch (error) {
    console.log("Error:", error.message);
    } 
    getData();
}