const express = require ('express');
const productCategories = require('./Routes/productCategories');
const products = require("./Routes/products");
const app = express();
const cors = require('cors');

app.use(cors());

app.use("/productCategories",productCategories);
app.use("/",products);

const PORT = 5001;

const server = app.listen(PORT, ()=>{
    console.log("App is running on the port - 5001");
})

