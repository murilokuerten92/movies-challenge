import React from 'react';
import * as S from './styles'

interface Column {
    key: string;
    title: string;
    filterable?: boolean;
}

interface TableProps {
    columns: Column[];
    data: any[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {

    return (
        <S.Table>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <S.TableHeader key={column.key}>
                            {column.title}
                        </S.TableHeader>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <S.TableRow
                        key={index}
                        background={index % 2 === 0}
                    >
                        {columns.map((column) => (
                            <S.TableCell key={column.key} >
                                {row[column.key]}
                            </S.TableCell>
                        ))}
                    </S.TableRow>
                ))}
            </tbody>
        </S.Table>
    );
};

export default Table;