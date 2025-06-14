import { useForm } from "@mantine/form";
import { Button, Stack, TextInput, NumberInput } from "@mantine/core";
import { useUpdateProduct } from "../queries";
import type { Product, UpdateBody } from "../types";
import { modals } from "@mantine/modals";

const UpdateProduct = ({ product }: { product: Product }) => {
    const { mutate } = useUpdateProduct();

    const form = useForm<UpdateBody>({
        initialValues: {
            title: product.title,
            price: product.price,
        },
    });

    const handleSubmit = (values: UpdateBody) => {
        const updateBody = {
            ...values,
            description: product.description,
            categoryId: product.category.id,
            images: product.images,
        };

        mutate({ id: product.id, body: updateBody });
        modals.closeAll()
    };


    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
                <TextInput label="Title" {...form.getInputProps("title")} />
                <NumberInput label="Price" {...form.getInputProps("price")} />
                <Button type="submit">Update</Button>
            </Stack>
        </form>
    );
};

export default UpdateProduct;
