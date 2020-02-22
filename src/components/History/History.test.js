import React from 'react';
import { render } from '@testing-library/react';
import History from '../History/History';
import mockHistory from './mockHistory';

// Smoke tests

it('renders initial history list', () => {
    const div = document.createElement('div');
    render(
        <History
            history={mockHistory.initialState}
        />,
        div);
});

it('renders populated history list', () => {
    const div = document.createElement('div');
    render(
        <History
            history={mockHistory.xIsWinner}
        />,
        div);
});
