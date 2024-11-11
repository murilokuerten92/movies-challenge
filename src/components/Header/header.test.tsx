import { screen } from '@testing-library/react';
import { Header } from '../Header';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../../utils/test-utils';
import '@testing-library/jest-dom';

describe('Header Component', () => {

    it('renders header with the title "Frontend React Test"', () => {
        render(<Header />);

        expect(screen.getByText('Frontend React Test')).toBeInTheDocument();
    });

    it('renders the container without crashing', () => {
        render(<Header />);

        const container = screen.getByRole('banner');
        expect(container).toBeInTheDocument();
    });
});