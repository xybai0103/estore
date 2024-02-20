const express = require ('express');
const products = express.Router();
const pool = require('../config/connection');

products.get("/",(req,res)=>{
    let productData;
    pool.query("Select * from products", (err, products)=>{
        if(err){
            res.status(500).send(err);
        }else{
            productData = products;
            res.status(200).send(productData);
        }
    })
})

module.exports = products;