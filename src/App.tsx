import { Button, Flex, Stack, Title, Table as TableM } from "@mantine/core";
import { HiMiniPlusCircle, HiMiniPencilSquare, HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";
import { Table } from "./ui/Table";
import { useGetProducts } from "./queries";
import { LoaderWithError } from "./ui/LoaderWithError";
import { CustomPagination } from "./export-ui/CustopPagination";
import { modals } from "@mantine/modals";
import { CreateProduct } from "./components/CreateProduct";

const App = () => {
  const [activePage, setActivePage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const { data, isLoading, error } = useGetProducts({
    activePage,
    limit: ITEMS_PER_PAGE,
  });

  const thead = ['№', 'Title', 'Slug', 'Price', 'Category', 'Description', 'Actions'];

  const rows = data?.products?.map((product) => (
    <TableM.Tr key={product.id}>
      <TableM.Td>{product.id}</TableM.Td>
      <TableM.Td>{product.title}</TableM.Td>
      <TableM.Td>{product.slug}</TableM.Td>
      <TableM.Td>{product.price} $</TableM.Td>
      <TableM.Td>{product.category.name}</TableM.Td>
      <TableM.Td>{product.description}</TableM.Td>
      <TableM.Td>
        <Flex align="center" gap="10">
          <Button size="xs" variant="light">
            <HiMiniPencilSquare />
          </Button>
          <Button size="xs">
            <HiOutlineXMark />
          </Button>
        </Flex>
      </TableM.Td>
    </TableM.Tr>
  ));

  const createProduct = () => {
    modals.open({
      children: <CreateProduct />,
      title: 'Create Product'
    })
  }

  return (
    <div className="container">
      <Stack gap="30">
        <Flex align="center" justify="space-between">
          <Title>Products</Title>
          <Button rightSection={<HiMiniPlusCircle />} onClick={createProduct}>Create</Button>
        </Flex>

        <LoaderWithError isLoading={isLoading} error={error}>
          <Table thead={thead} rows={rows} />
          <CustomPagination
            total={Math.ceil((data?.total ?? 0) / ITEMS_PER_PAGE)}
            value={activePage}
            onChange={setActivePage}
          />
        </LoaderWithError>
      </Stack>
    </div>
  );
};

export default App;