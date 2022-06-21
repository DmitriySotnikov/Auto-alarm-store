import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "./product.json" }),
    endpoints: build => ({
        getAllProducts: build.query({query: () => ({
                url: "",
                params: {

                }
            })
        })
    })
})