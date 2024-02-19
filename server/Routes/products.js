const express = require ('express');
const products = express.Router();
const pool = require('../config/db');
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Bxy04250201!",
    database: "estore",
    port: 3306,
    multipleStatements: true
})

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