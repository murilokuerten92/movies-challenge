import { screen } from '@testing-library/react';
import { Home } from '../Home';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render } from '../../utils/test-utils';

jest.mock('../../components/Header', () => ({
    Header: () => <div>Mock Header</div>
}));

jest.mock('../../components/SideBar', () => ({
    Aside: () => <div>Mock Sidebar</div>
}));

describe('Home Component', () => {

    it('renders Header and Sidebar', () => {
        render(<Home />);

        expect(screen.getByText('Mock Header')).toBeInTheDocument();
        expect(screen.getByText('Mock Sidebar')).toBeInTheDocument();
    });

    it('renders Outlet component', () => {
        render(<Home />);

        expect(screen.getByRole('main')).toBeInTheDocument();
    });
});