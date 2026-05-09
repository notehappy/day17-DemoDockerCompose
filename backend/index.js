const express = require('express');
const { Client } = require('pg');
const cors = require('cors');

const connection = new Client({
  user: 'postgres',
  host: 'postgres_db',
  database: 'EcommerceDB',
  password: 'password1234',
  port: 5432,
});
connection.connect();
const app = express();

//Middleware
app.use(cors());

app.use(express.json());

//Greetings
app.get('/', (req, res) => {
  res.send('Welcome to my Ecommerce API!');
});

//Check connection
app.get('/checkConnection', (req, res) => {
  connection.query('SELECT NOW()', (err, rows) => {
    if (err) throw err;
    res.status(200).send(rows);
  });
});


// POST request to add a new product
app.post('/addProduct', (req, res) => {
  const { product_name, product_price, product_quantity, product_image_url } = req.body;

  connection.query(
    'INSERT INTO Product (product_name, product_price, product_quantity, product_image_url) VALUES ($1, $2, $3, $4) RETURNING product_id',
    [product_name, product_price, product_quantity, product_image_url],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(201).send(`Product added with ID: ${result.rows[0].product_id}`);
      }
    }
  );
});


// GET request to get all products
app.get('/getProducts', (req, res) => {
  connection.query('SELECT * FROM product', (err, rows) => {
    if (err) throw err;
    res.status(200).send(rows.rows);
  });
});

app.listen(3000, () => {
  console.log("Backend server is running on port 3000");
});