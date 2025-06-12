import { api } from "./api";
import type { Product, ProductBody } from "./types";

export const getProducts = async ({ activePage, limit }: { activePage: number, limit: number }) => {
    const offset = (activePage - 1) * limit;
    const { data } = await api.get<Product[]>(`/products`, {
        params: { offset, limit, }
    });
    return { products: data, total: 60 }
};

export const createProduct = async (newProduct: ProductBody): Promise<Product> => {
    const { data } = await api.post<Product>(`/products`, newProduct);
    return data
}