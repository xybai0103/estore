import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk (
    'getCategories',
    ()=>{
        const baseUrl = process.env.REACT_APP_API_BASE_URL;
        const categories = fetch(`${baseUrl}/productCategories`)
        // const categories = fetch("http://localhost:5001/productCategories")
        .then((res)=>res.json());
        return categories;
    }
)