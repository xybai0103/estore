require('dotenv').config(); 
const express = require ('express');
const productCategories = require('./Routes/productCategories');
const products = require("./Routes/products");
const app = express();
const cors = require('cors');

app.use(cors());

app.use("/productCategories",productCategories);
app.use("/getProducts",products);

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../client/build')));

// Catch-all handler for serving the index.html of your React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, ()=>{
    console.log("App is running on the port");
})

