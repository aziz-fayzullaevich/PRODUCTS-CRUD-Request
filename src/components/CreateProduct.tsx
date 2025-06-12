import { modals } from "@mantine/modals";
import { useCreateProducts } from "../queries";
import { ProductForm } from "./ProductForm";
import type { INITIAL_VALUE } from "../types";

const initialValues: INITIAL_VALUE = {
    title: "",
    price: 0,
    description: "",
    categoryId: 1,
    images: ["https://placeimg.com/640/480/any"],
};

export const CreateProduct = () => {
    const { mutate } = useCreateProducts();

    const handleSubmit = (values: INITIAL_VALUE) => {
        mutate(values, {
            onSuccess: () => {
                modals.closeAll();
            },
        });
    };

    return (
        <ProductForm
            title="Create"
            initialValues={initialValues}
            onSubmit={handleSubmit}
        />
    );
};
