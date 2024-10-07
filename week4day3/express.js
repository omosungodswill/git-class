// Create a basic Express server that:
// ◦ Logs every incoming request using a custom logging middleware.
// ◦ Uses express.json() to handle JSON request bodies.
// ◦ Protects a specific route (e.g., /dashboard) with authentication middleware that checks for an authorization token.
// 2.Test the server by making GET, POST, and PUT requests, and verify that the middleware is working correctly.

const express = require("express")
const app = express()

const logging = (req, res, next) => {
    console.log(`${req.method} request to ${req.url}`)
    next();
};
app.use(logging);

const middleware_1 = app.use((req, res, next) => {
    console.log("middleware 1 is running")
    next();
    });
const middleware_2 = app.use((req, res, next) => {
    console.log("middleware 2 is running")
    next()
});
const middleware_3 = app.use((req, res, next) => {
    console.log("middleware 3 is running")
});

const authenticate = (req, res, next) => {
    if (req.headers.authorization ==='Bearertoken123') {
        next(); 
    } else {
        res.status(403).send('Unauthorized');
}};
app.use(authenticateUser);
app.listen(4000, () => {
    console.log("Express server running on port 4000");
});
app.get('/', (req, res) => {
    console.log(middleware_1)
});
