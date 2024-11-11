import { useEffect, useState } from 'react';
import * as S from './styles'
import api from '../../service/api';
import { Empty } from '../Empty';
import Load from '../Load';

interface Column {
    key: string;
    label: string;
    filterable?: boolean;
}

interface DynamicTableProps {
    columns: Column[];
}

const TableView = ({ columns }: DynamicTableProps) => {
    const [data, setData] = useState<any[]>([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [filters, setFilters] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState<boolean>(true);
    const itemsPerPage = 15;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await api.get('', {
                    params: {
                        page: currentPage,
                        size: itemsPerPage,
                        ...filters,
                    },
                });
                setData(response.data.content);
                setTotalItems(response.data.totalElements);
            } catch (error) {
                alert('error')
            } finally {
                setLoading(false)
            }
        };
        fetchData();
    }, [currentPage, filters]);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page: number) => {
        if (page >= 0 && page < totalPages) {
            setCurrentPage(page);
        }
    };

    const handleFilterChange = (key: string, value: string) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
        setCurrentPage(0);
    };

    const startPage = Math.max(0, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + 4);
    const pages = Array.from({ length: totalItems <= 15 ? 1 : (endPage - 1) - startPage + 1 }, (_, i) => startPage + i);

    const renderBoolean = (value: boolean) => (value ? 'Yes' : 'No');

    return (
        <S.TableContainer>
            <S.Table>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <S.TableHeader key={column.key}>
                                <S.ContainerHeader>
                                    {column.label}
                                    {column.key === 'winner' && column.filterable && (
                                        <S.SelectFilter onChange={(e) => handleFilterChange(column.key, e.target.value)}>
                                            <option value="">All</option>
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </S.SelectFilter>
                                    )}
                                    {column.key === 'year' && column.filterable && (
                                        <S.InputFilter
                                            type="number"
                                            placeholder='Filter by year'
                                            onChange={(e) => (e.target.value.length === 4 || e.target.value.length === 0) && handleFilterChange(column.key, e.target.value)}
                                        />
                                    )}
                                </S.ContainerHeader>
                            </S.TableHeader>
                        ))}
                    </tr>
                </thead>
                {loading ? <tr><S.TableCellEmpty colSpan={columns.length}>
                    <S.ContainerLoad data-testid="loading" >
                        <Load data-testid="loading" />
                    </S.ContainerLoad>
                </S.TableCellEmpty></tr> :
                    data.length === 0 ? <tr>
                        <S.TableCellEmpty colSpan={columns.length}>
                            <Empty />
                        </S.TableCellEmpty>
                    </tr> : <> <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                {columns.map((column) => (
                                    <S.TableCell key={column.key} background={index % 2 === 0}>{column.key === 'winner' ? renderBoolean(row[column.key]) : row[column.key]}</S.TableCell>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                        <S.PaginationFooter>
                            <tr>
                                <td colSpan={columns.length}>
                                    <S.Pagination>
                                        <S.PageButton
                                            disabled={currentPage === 0}
                                            onClick={() => handlePageChange(0)}
                                        >
                                            {'<<'}
                                        </S.PageButton>
                                        <S.PageButton
                                            disabled={currentPage === 0}
                                            onClick={() => handlePageChange(currentPage - 1)}
                                        >
                                            {'<'}
                                        </S.PageButton>
                                        {pages.map((page) => (
                                            <S.PageButton
                                                key={page}
                                                onClick={() => handlePageChange(page)}
                                                active={page === currentPage}
                                            >
                                                {totalItems <= 15 ? 1 : page + 1}
                                            </S.PageButton>
                                        ))}
                                        <S.PageButton
                                            disabled={currentPage === totalPages - 1}
                                            onClick={() => handlePageChange(currentPage + 1)}
                                        >
                                            {'>'}
                                        </S.PageButton>
                                        <S.PageButton
                                            disabled={currentPage === totalPages - 1}
                                            onClick={() => handlePageChange(totalPages - 1)}
                                        >
                                            {'>>'}
                                        </S.PageButton>
                                    </S.Pagination>
                                </td>
                            </tr>
                        </S.PaginationFooter></>}
            </S.Table>
        </S.TableContainer>
    );
};

export default TableView;