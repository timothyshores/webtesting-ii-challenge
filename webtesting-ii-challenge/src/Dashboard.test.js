import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';

import Dashboard from './Dashboard';

afterEach(cleanup);

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        render(<Dashboard />);
    });
});