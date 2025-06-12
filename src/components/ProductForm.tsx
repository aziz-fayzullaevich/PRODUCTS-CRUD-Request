import { Button, Flex, NumberInput, Stack, Textarea, TextInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import type { ProductFormProps } from "../types";
import { modals } from "@mantine/modals";

export const ProductForm = ({ title, initialValues, onSubmit }: ProductFormProps) => {
    const form = useForm({
        initialValues,
        validate: {
            title: isNotEmpty('Required field'),
            price: isNotEmpty('Select price'),
            description: isNotEmpty('Select description'),
            categoryId: isNotEmpty('Required field'),
        },
    });

    return (
        <form onSubmit={form.onSubmit(onSubmit)}>
            <Stack>
                <TextInput label="Title" {...form.getInputProps("title")} />
                <NumberInput label="Price" {...form.getInputProps("price")} />
                <Textarea label="Description" {...form.getInputProps("description")} />
                <NumberInput label="Category ID" {...form.getInputProps("categoryId")} />

                <Flex justify="end" gap="10">
                    <Button variant="default" onClick={() => modals.closeAll()}>Back</Button>
                    <Button type="submit">{title}</Button>
                </Flex>
            </Stack>
        </form>
    );
};