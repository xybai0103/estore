const express = require ('express');
const products = express.Router();
const mysql = require('mysql2');
require('dotenv').config();

let pool;

if(process.env.JAWSDB_URL){
    pool = mysql.createPool(process.env.JAWSDB_URL);
}else{
    pool = mysql.createPool({
        host: "localhost",
        user: "root",
        password: process.env.DB_PW,
        database: "estore",
        port: 3306,
        multipleStatements: true
    })
}

products.get("/getProducts",(req,res)=>{
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