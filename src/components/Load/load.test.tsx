import { screen } from '@testing-library/react';
import Load from '../Load';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../../utils/test-utils';
import '@testing-library/jest-dom';

describe('Load Component', () => {

    it('renders the Load component without crashing', () => {
        render(<Load />);

        const container = screen.getByTestId('load-container');
        expect(container).toBeInTheDocument();
    });
});