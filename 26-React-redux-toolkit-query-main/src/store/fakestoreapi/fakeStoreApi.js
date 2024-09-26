import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const fakeStoreApiSlice = createApi ({
    reducerPath:"fakeStore",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://fakestoreapi.com"
    }),
    endpoints(builder){
        return {
            fakeStoreApiEnd:builder.query({
                query(){
                    return "/products/categories"
                }
            }),
            singleCategory:builder.query({
                query(){
                    return "/products/category/jewelery"
                }
            }),
            singleProduct:builder.query({
                query(){
                    return "/products/11"
                }
            })
        }
    }
})

export const {useFakeStoreApiEndQuery,useSingleCategoryQuery,useSingleProductQuery} = fakeStoreApiSlice

