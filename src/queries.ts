import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createProduct, getProducts } from "./services";
import type { ProductBody } from "./types";

export const useGetProducts = ({ activePage, limit }: { activePage: number, limit: number }) => {
    return useQuery({
        queryKey: ['products', activePage, limit],
        queryFn: () => getProducts({ activePage, limit }),
        staleTime: 60_000,
        placeholderData: keepPreviousData,
    })
};

export const useCreateProducts = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (newProduct: ProductBody) => createProduct(newProduct),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
        },

    });
};