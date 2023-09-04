import { Product } from "../types/Product";
import { axiosInstance } from "./axios";

export const getProducts = async (): Promise<Product[]> => {
    const { data } = await axiosInstance.get('/products');

    return data
}