import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk (
    'getCategories',
    ()=>{
        // const categories = fetch("http://localhost:5001/productCategories")
        const categories = fetch(`${process.env.REACT_APP_API_URL}/productCategories`)
        .then((res)=>res.json());
        return categories;
    }
)