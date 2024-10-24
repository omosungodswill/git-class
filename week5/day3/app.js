//MONGODB
const { name } = require('ejs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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

//Schema
const productSchema = new Schema({
    name:       {type: String, required: true},
    price:      {type: Number, required: true},
    category:   {type: String, required: true}
}, {timestamps: true});

const Product = mongoose.model('Product', productSchema)

const addProduct = async () => {
    const product = new Product(
        //{name: "Rubiks cube", price: 3000, category: "Entertainment" }
       {name: "Corn on da cob", price: 200, category: "Chow"}
    );
    try {
        const savedProduct = await product.save();
        console.log('Product added ',savedProduct)
    } catch (err) {
        console.error("Error adding new Product")
    };
};

const getProduct = async() => {
    try{
    const products = await Product.find();
    console.log("All prpoducts: ", products)
    } catch (err) {
    console.error("Error fetching Products", err)
    }
};


const updateProduct = async(name, newPrice) => {
    try {
        const updateProduct = await Product.findOneAndUpdate(
            {name: name},
            {price: newPrice},
            {new: true}
        );
        console.log('Price updated:', updateProduct);
    } catch (err) {
        console.error("Error updating product price", err)
    }
};

const deleteProduct = async(name) => {
    try{
        const deletedProduct = await Product.findOneAndDelete(
            {name: name});
        console.log("Product deleted successfully", deletedProduct)
    } catch(err) {
        console.error("Error deleteing product", err)
    }
}
//addProduct()
//getProduct()
//updateProduct("Rubiks cube", 300)
//deleteProduct("Rubiks cube")