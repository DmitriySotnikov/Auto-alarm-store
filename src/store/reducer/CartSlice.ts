import {createSlice} from "@reduxjs/toolkit";


export interface ICart {
    count: number
}

const initialState: ICart = {
    count: 0
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: {

    }
})