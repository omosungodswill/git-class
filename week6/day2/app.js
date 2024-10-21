// 1. Implement all CRUD operations using the controller pattern for users.
// 2. Test each endpoint (GET, POST, PUT, DELETE) using Postman.
// 3. Add logging middleware to output the HTTP method and URL for each request.
const express = require('express');
const router = require('./routes/getUsers');
const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Server running on localhost 3000');
});

app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
})
app.use('/api', router);

app.get('/', (req, res) => {
    console.log("Welcome to my app broskis")
})

module.exports = app;