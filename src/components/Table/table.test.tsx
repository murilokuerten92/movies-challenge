import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from '../Table';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

describe('Table Component', () => {
    const columns = [
        { key: 'name', title: 'Name' },
        { key: 'age', title: 'Age' },
        { key: 'country', title: 'Country' },
    ];

    const data = [
        { name: 'Alice', age: 30, country: 'USA' },
        { name: 'Bob', age: 25, country: 'Canada' },
        { name: 'Charlie', age: 35, country: 'UK' },
    ];

    it('renders table headers correctly', () => {
        render(<ThemeProvider theme={theme}><Table columns={columns} data={data} /></ThemeProvider>);
        columns.forEach((column) => {
            expect(screen.getByText(column.title)).toBeInTheDocument();
        });
    });

    it('renders table rows with the correct data', () => {
        render(<ThemeProvider theme={theme}><Table columns={columns} data={data} /></ThemeProvider>);
        data.forEach((row) => {
            expect(screen.getByText(row.name)).toBeInTheDocument();
            expect(screen.getByText(row.age.toString())).toBeInTheDocument();
            expect(screen.getByText(row.country)).toBeInTheDocument();
        });
    });

    it('applies alternating row colors', () => {
        render(<ThemeProvider theme={theme}><Table columns={columns} data={data} /></ThemeProvider>);
        const rows = screen.getAllByRole('row');

        const dataRows = rows.slice(1); 
        dataRows.forEach((row, index) => {
            const expectedColor = index % 2 === 0 ? theme.colors.lightestGray : theme.colors.whiteFull;
            expect(row).toHaveStyle(`background-color: ${expectedColor}`);
        });
    });
});