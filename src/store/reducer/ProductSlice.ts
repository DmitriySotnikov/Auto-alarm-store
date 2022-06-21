import {IProduct} from "../../models/IProduct";
import {createSlice} from "@reduxjs/toolkit";


export interface ProductState {
    products: IProduct[];
    isLoading: boolean;
    error: string;
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: "",
};

export const productSlice = createSlice({
        name: "product",
        initialState,
        reducers: {},
    extraReducers: {
        // successful upload

    }
    }
);

export default productSlice.reducer;