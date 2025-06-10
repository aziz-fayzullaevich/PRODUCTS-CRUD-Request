import { Table as TableM } from "@mantine/core";

interface TableProps {
    thead: string[];
    rows: React.ReactNode;
}

export const Table = ({ thead, rows }: TableProps) => {
    return (
        <TableM highlightOnHover withTableBorder withColumnBorders>
            <TableM.Thead bg='blue' c='#fff'>
                <TableM.Tr>
                    {thead.map((th, index) => (
                        <TableM.Th key={index}>{th}</TableM.Th>
                    ))}
                </TableM.Tr>
            </TableM.Thead>
            <TableM.Tbody>
                {rows}
                <TableM.Tr />
            </TableM.Tbody>
        </TableM>
    );
};
