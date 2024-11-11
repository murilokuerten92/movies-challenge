import { screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { Aside } from '../SideBar'; // Adjust the path as needed
import { render } from '../../utils/test-utils';
import '@testing-library/jest-dom';

describe('Aside Component', () => {

    test('renders correct navigation links', () => {
        render(
            <MemoryRouter>
                <Aside />
            </MemoryRouter>
        );

        expect(screen.getByText('Dashboard')).toBeInTheDocument();
        expect(screen.getByText('List')).toBeInTheDocument();

        // eslint-disable-next-line testing-library/no-node-access
        expect(screen.getByText('Dashboard').closest('a')).toHaveAttribute('href', '/dashboard');
        // eslint-disable-next-line testing-library/no-node-access
        expect(screen.getByText('List').closest('a')).toHaveAttribute('href', '/movies-list');
    });
});