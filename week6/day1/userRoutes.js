const app = require('./app')
const port = process.env.port || 3000

app.listen(port, () => {
    console.log(`Server running on Port ${port}`)
})

app.get("/users", (req,res) => {
    const users = [
        {user_id: 1, name: "Godswill"},
        {user_id: 2, name: "Charles"}];
    res.send({users})
})