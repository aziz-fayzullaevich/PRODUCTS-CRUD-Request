import { Flex, Pagination } from '@mantine/core';
import type { CustomPaginationProps } from '../types';

export const CustomPagination = ({ total, value, onChange }:CustomPaginationProps) => {
    return (
        <Flex justify='center' mt='md'>
            <Pagination
                total={total}
                value={value}
                onChange={onChange}
                mt="md"
                radius="md"
                size="md"
                withEdges
            />
        </Flex>
    );
};