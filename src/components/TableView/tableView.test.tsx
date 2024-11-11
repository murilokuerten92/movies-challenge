import { screen, fireEvent } from '@testing-library/react';
import TableView from '../TableView';
import api from '../../service/api';
import { render } from '../../utils/test-utils';
import '@testing-library/jest-dom';

jest.mock('../../service/api');

const columns = [
    { key: 'name', label: 'Name' },
    { key: 'year', label: 'Year', filterable: true },
    { key: 'winner', label: 'Winner', filterable: true }
];

describe('TableView Component', () => {

    test('renders loading state initially', async () => {
        (api.get as jest.Mock).mockResolvedValueOnce({ data: { content: [], totalElements: 0 } });

        render(<TableView columns={columns} />);

        const loading = screen.getByTestId('loading');
        expect(loading).toBeInTheDocument();
    });

    test('renders data after API call', async () => {
        const mockResponse = { data: { content: [{ name: 'Movie 1', year: 2020, winner: false }], totalElements: 1 } };
        (api.get as jest.Mock).mockResolvedValueOnce(mockResponse);

        render(<TableView columns={columns} />);

        await screen.findByTestId('loading');

        expect(screen.getByText('Movie 1')).toBeInTheDocument();
        expect(screen.getByText('2020')).toBeInTheDocument();
    });

    test('renders empty state when no data is available', async () => {
        const mockResponse = { data: { content: [], totalElements: 0 } };
        (api.get as jest.Mock).mockResolvedValueOnce(mockResponse);

        render(<TableView columns={columns} />);

        await screen.findByTestId('loading');

        expect(await screen.findByText('No data returned')).toBeInTheDocument();
    });

    test('should change filters and reload data', async () => {
        const mockResponse = {
            data: { content: [{ name: 'Movie 1', year: 2020, winner: true }], totalElements: 1 }
        };
        (api.get as jest.Mock).mockResolvedValueOnce(mockResponse);

        render(<TableView columns={columns} />);

        await screen.findByText('Movie 1');

        fireEvent.change(screen.getByPlaceholderText('Filter by year'), { target: { value: '2020' } });

        expect(api.get).toHaveBeenCalledWith('', expect.objectContaining({ params: expect.objectContaining({ year: '2020' }) }));
    });

    test('should handle pagination correctly', async () => {
        const mockResponse = {
            data: {
                content: [{ name: 'Movie 1', year: 2020, winner: true }],
                totalElements: 30
            }
        };
        (api.get as jest.Mock).mockResolvedValueOnce(mockResponse);

        render(<TableView columns={columns} />);

        await screen.findByText('Movie 1');

        fireEvent.click(screen.getByText('>'));

        expect(api.get).toHaveBeenCalledWith('', expect.objectContaining({ params: expect.objectContaining({ page: 1 }) }));
    });

    test('should disable previous page button on the first page', async () => {
        const mockResponse = {
            data: { content: [{ name: 'Movie 1', year: 2020, winner: true }], totalElements: 30 }
        };
        (api.get as jest.Mock).mockResolvedValueOnce(mockResponse);

        render(<TableView columns={columns} />);

        await screen.findByText('Movie 1');

        // eslint-disable-next-line testing-library/no-node-access
        const prevButton = screen.getByText('<').closest('button');
        
        expect(prevButton).toBeDisabled();
    });

    test('should render Load component when loading state is true', () => {
        render(<TableView columns={columns} />);

        expect(screen.getByTestId('loading')).toBeInTheDocument();
    });
});