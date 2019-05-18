import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';

import Display from './Display';

afterEach(cleanup);

describe('<Display />', () => {
    it('renders without crashing', () => {
        render(<Display />);
    });
});