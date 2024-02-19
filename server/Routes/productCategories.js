const express = require ('express');
const productCategories = express.Router();
const pool = require('../config/db');

productCategories.get("/",(req,res)=>{
    let categorydata;
    pool.query("Select * from categories", (error, categories)=>{
        if(error){
            res.status(500).send(error);
        }else{
            categorydata = categories;
            res.status(200).send(categorydata);
        }
    })
})

module.exports = productCategories;