import React from 'react';
import { render } from '@testing-library/react';
import Status from './Status';
import History from "../History/History";

// Smoke test

it('renders status', () => {
    const status = 'Next player: X';
    const div = document.createElement('div');
    render(
        <Status
            status={status}
        />,
        div);
});
