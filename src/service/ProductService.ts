import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IProduct} from "../models/IProduct";


export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
    endpoints: build => ({
        getAllProducts: build.query<IProduct[], number>({query: (limit) => ({
                url: "/products",
                params: {
                    limit
                }
            })
        })
    })
})