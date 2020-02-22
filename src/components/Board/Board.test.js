import React from 'react';
import { render } from '@testing-library/react';
import Board from '../Board/Board';

// Smoke test

it('renders without crashing', () => {
    const squares = [null,null,null,null,null,null,null,null,null];
    const div = document.createElement('div');
    render(
        <Board
            squares={squares}
        />,
        div);
});
