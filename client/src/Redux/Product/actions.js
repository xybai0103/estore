import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk (
    'getProducts',
    async ()=>{
        const baseUrl = process.env.REACT_APP_API_BASE_URL;
        const productData = await fetch(`${baseUrl}/getProducts`)
        // const productData = await fetch("http://localhost:5001/getProducts")
        .then((res)=>res.json());
        return productData;
    }
)