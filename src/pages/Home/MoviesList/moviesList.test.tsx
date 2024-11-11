import { screen } from '@testing-library/react';
import { MoviesList } from '../MoviesList';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../../../utils/test-utils';
import '@testing-library/jest-dom';

jest.mock("../../../components/TableView", () => ({
    __esModule: true,
    default: function Mock() {
        return <div data-testid="Mock TableView" />
    }
}));

describe('MoviesList Component', () => {

    it('renders MoviesList with heading', () => {
        render(<MoviesList />);

        expect(screen.getByText('List Movies')).toBeInTheDocument();
    });

    it('renders TableView component', () => {
        render( <MoviesList />);

        expect(screen.getByTestId('Mock TableView')).toBeInTheDocument();
    });

});