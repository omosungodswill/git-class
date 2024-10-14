const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'sycamore',
    password: '@wes0meee',
    port: 5432
})

// pool.query(`CREATE TABLE products (
//     id SERIAL PRIMARY KEY,
//     name varchar(100) UNIQUE,
//     description varchar(100),
//     price float,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );`, (err, res) => {
//     if (err) {
//         console.error('Error creating table: ', err)
//     } else {
//         console.log("Table created successfully")
//     }
// });

const insertProduct = (name, description, price) => {
    const query = 'INSERT INTO PRODUCTS(name, description, price) VALUES($1, $2, $3)'
    const values = [name, description, price]

pool.query(query, values, (err,res) => {
    if (err) {
        console.error('Error inserting data', err)
    } else {
        console.log("Product successfully inserted")
    }
})
};

const updateProducts = (name, newPrice) => {
    const query = 'UPDATE products SET price = $1 WHERE name = $2';
    const values = [newPrice, name];

    pool.query(query, values, (err, res) => {
        if (err) {
            console.error("Unable to update product price", err)
        } else {
            console.log("Product price successfully updated")
        };
    });
};

const deleteProducts = (name) => {
    const query = 'DELETE FROM PRODUCTS WHERE name = $1'
    const values = [name]
    pool.query(query, values, (err,res) => {
        if (err) {
            console.error("Product could not be deleted", err)
        } else {
            console.log("Product successfully deleted")
        }
    })
}
deleteProducts("2024 Macbook Pro")


//insertProduct("iPhone 13pro", "Lil cuh phone", 699)
//updateProducts("2024 Macbook Pro", 100)