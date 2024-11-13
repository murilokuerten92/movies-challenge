import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from '../Table';
import theme from '../../styles/theme';
import { render } from '../../utils/test-utils';

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
        render(<Table columns={columns} data={data} />);
        columns.forEach((column) => {
            expect(screen.getByText(column.title)).toBeInTheDocument();
        });
    });

    it('renders table rows with the correct data', () => {
        render(<Table columns={columns} data={data} />);
        data.forEach((row) => {
            expect(screen.getByText(row.name)).toBeInTheDocument();
            expect(screen.getByText(row.age.toString())).toBeInTheDocument();
            expect(screen.getByText(row.country)).toBeInTheDocument();
        });
    });

    it('applies alternating row colors', () => {
        render(<Table columns={columns} data={data} />);
        const rows = screen.getAllByRole('row');

        const dataRows = rows.slice(1); 
        dataRows.forEach((row, index) => {
            const expectedColor = index % 2 === 0 ? theme.colors.lightestGray : theme.colors.whiteFull;
            expect(row).toHaveStyle(`background-color: ${expectedColor}`);
        });
    });
});