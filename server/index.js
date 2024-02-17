const express = require ('express');
const productCategories = require('./Routes/productCategories');
const products = require("./Routes/products");
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../client/build')));
  
//app.use(routes);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build','index.html'));
});

app.use("/productCategories",productCategories);
app.use("/",products);

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, ()=>{
    console.log("App is running on the port");
})

