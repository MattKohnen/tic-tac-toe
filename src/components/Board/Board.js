import React from 'react';
import renderBoard from './renderBoard';
import renderSquare from '../Square/renderSquare';

const Board = (props) => {
    return (
        <div className="board">
            {renderBoard(props.squares, props.onClick, renderSquare)}
        </div>
    );
};

export default Board;
