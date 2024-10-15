//MONGODB

const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
console.log('Connected to MongoDB');
})
.catch(err => {
console.error('Connection error', err);
});