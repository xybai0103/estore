require('dotenv').config();
const path = require('path');
const express = require ('express');
const productCategories = require('./Routes/productCategories');
const products = require("./Routes/products");
const app = express();
const cors = require('cors');

//app.use(cors());
const whitelist = ['http://localhost:5001', 'https://estore24-bd1f2ca2cf40.herokuapp.com'];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }; // Reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // Disable CORS for this request
  }
  callback(null, corsOptions); // Callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));

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

