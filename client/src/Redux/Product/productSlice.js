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
    reducers:{
        filterProducts: (state, action)=>{
            const filteredData = action.payload.products.filter((elem)=>{
                return elem.category_id === action.payload.selectedCategory.id;
            })
            state.products=filteredData;
        },
        filterByPrice:(state, action)=>{
            const filteredData = action.payload.products.filter((elem)=>{
                return elem.price <= action.payload.maxPriceLimit && elem.price >= action.payload.minPriceLimit
            })
            state.products=filteredData;
        }
    },
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

export const { filterProducts, filterByPrice } = productSlice.actions;
export default productSlice.reducer;