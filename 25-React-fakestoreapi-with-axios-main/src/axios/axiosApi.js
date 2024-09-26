import axios from "axios";

export const fakeApiAxios = axios.create({
    baseURL: "https://fakestoreapi.com/products"
});
