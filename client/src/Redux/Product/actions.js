import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk (
    'getProducts',
    async ()=>{
        //const productData = await fetch("http://localhost:5001/getProducts")
        const productData = await fetch(`${process.env.REACT_APP_API_URL}/getProducts`)
        .then((res)=>res.json());

        return productData;
    }
)