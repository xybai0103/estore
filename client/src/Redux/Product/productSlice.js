import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./actions";

const initialState = {
    products: [],
    status: "idle",
    error: ""
}

const productSlice = createSlice({
    name: "Products",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action)=>{
                state.status = "Loading";
            })
            .addCase(getProducts.fulfilled, (state, action)=>{
                state.status = "Success";
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action)=>{
                state.status = "Failed";
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;