const express = require ('express');
const productCategories = express.Router();
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

productCategories.get("/",(req,res)=>{
    let categorydata;
    pool.query("Select * from categories", (error, categories)=>{
        if(error){
            categorydata = error;
            res.status(500).send(categorydata);
        }else{
            categorydata = categories;
            res.status(200).send(categorydata);
        }
    })
})

module.exports = productCategories;