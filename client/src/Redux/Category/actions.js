import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk (
    'getCategories',
    ()=>{
        // const categories = fetch("http://localhost:5001/productCategories")
        const categories = fetch("https://estore24-bd1f2ca2cf40.herokuapp.com/productCategories")
        .then((res)=>res.json());
        return categories;
    }
)