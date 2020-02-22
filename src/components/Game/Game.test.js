import React from 'react';
import { render } from '@testing-library/react';
import Game from './Game';
import History from "../History/History";

// Smoke test

it('renders game', () => {
    const div = document.createElement('div');
    render(
        <Game />,
        div);
});
