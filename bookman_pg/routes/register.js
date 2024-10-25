const express = require('express');
const app = express();
const bcrypt = require('bcrypt')

const thing = require('./db')
const User = thing.User
const validate = require('./middleware/validate')
app.use(express.json())
app.set('view engine', 'ejs')

const register = app.post('/register', async (req, res) => {
    const {error} = validate(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
     let user = await User.findOne({ email: req.body.email })
    if (user) {
        return res.status(400).send('User already exists. Please sign in')
    } else {
        try {
            const salt = await bcrypt.genSalt(10)
            const password = await bcrypt.hash(req.body.password, salt)
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: password
        })
        await User.save()
        return res.status(201).json(user)
        } catch(err) {
            console.log('error')
        }
    }
})

module.exports = register;