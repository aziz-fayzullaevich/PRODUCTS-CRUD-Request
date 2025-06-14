import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createProduct, getProducts, deleteProduct, updateProduct } from "./services";
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

export const useUpdateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, body }: { id: number; body: ProductBody }) => updateProduct({ id, body }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
        }
    })
};

export const useDeleteProducts = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (productId: number) => deleteProduct(productId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
        }
    })
}