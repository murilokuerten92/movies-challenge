import { screen } from '@testing-library/react';
import { Empty } from '../Empty';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../../utils/test-utils';
import '@testing-library/jest-dom';

describe('Empty Component', () => {

    it('renders with default description', () => {
        render(<Empty />);

        expect(screen.getByText('No data returned')).toBeInTheDocument();
    });

    it('renders with custom description', () => {
        const customDescription = 'No movies available';

        render(<Empty description={customDescription} />);

        expect(screen.getByText(customDescription)).toBeInTheDocument();
    });
});