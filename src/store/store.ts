import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./reducer/ProductSlice";
import uiReducer from "./reducer/UISlice";
import {productApi} from "../service/ProductService";


export const store = configureStore({
    reducer: {
        product: productReducer,
        ui: uiReducer,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(productApi.middleware),

});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;