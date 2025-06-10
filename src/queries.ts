import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProducts } from "./services";

export const useGetProducts = ({ activePage, limit }: { activePage: number, limit: number }) => {
    return useQuery({
        queryKey: ['products', activePage, limit],
        queryFn: () => getProducts({ activePage, limit }),
        staleTime: 60_000,
        placeholderData: keepPreviousData,
    })
};