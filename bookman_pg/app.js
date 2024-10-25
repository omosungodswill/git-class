const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const thing = require('./db')
const connect = thing.connect
const user = thing.User

const registerRoute = require('./routes/register')
require("dotenv").config();
const port=process.env.port

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.set('view engine', 'ejs')


app.listen(port, () => {
    connect();
    console.log(`listening on ${port}`)
})

app.get("/", (req, res) => {
    res.render('home')
})
app.get("/login", (req, res) => {
    res.render('login')
})

app.post("/login", async(req, res) => {
    try{
        const check = await user.findOne({email: req.body.email})
        if(check.password===req.body.password) {
            res.render('home')
        } else{ res.send("wrong password")}
    } catch {
        res.send("Incorrect password or email")
    }
})
app.get("/register", (req, res) => {
    res.render('register')
})

app.post("/register", registerRoute)
// app.post("/register", async(req, res) => { 
    // try{
    //     const newUser = new user({ 
    //         username: req.body.username,
    //         email: req.body.email, 
    //         password: req.body.password });
    //     await newUser.save(); // Save to database
    //     res.render("home")
    // } catch(err){
    //     console.error('failed to post', err)
    // }
// })