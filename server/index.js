const express = require ('express');
const path = require('path');
const productCategories = require('./Routes/productCategories');
const products = require("./Routes/products");
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());

app.use(express.static(path.join(__dirname, '../client/build')));
  
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use("/productCategories",productCategories);
app.use("/",products);

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, ()=>{
    console.log("App is running on the port");
})

