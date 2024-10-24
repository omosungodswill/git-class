const express = require('express');
const app = express();
const thing = require('./db')
const connect = thing.connect
const user = thing.User

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.set('view engine', 'ejs')


app.listen(4000, () => {
    connect();
    console.log("listening on 4000")
})

app.get("/", (req, res) => {
    res.render('home')
})

app.get("/register", (req, res) => {
    res.render('register')
})

app.post("/register", async(req, res) => {
    try{
        const newUser = new user({ 
            username: req.body.username,
            email: req.body.email, 
            password: req.body.password });
        await newUser.save(); // Save to database
        res.render("home")
    } catch(err){
        console.error('failed to post', err)
    }
})