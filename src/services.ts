import { api } from "./api";
import type { Product } from "./types";

export const getProducts = async ({ activePage, limit }: { activePage: number, limit: number }) => {
    const offset = (activePage - 1) * limit;
    const { data } = await api<{products: Product[]; total:number}>(`/products`, {
        params: {
            offset,
            limit,
        }
    });
    return data;
};