import React from 'react';
import Square from './Square';

const Board = (props) => {
    const renderSquare = (i) => {
        return (
            <Square
                key={i}
                value={props.squares[i]}
                onClick={() => props.onClick(i)}
            />
        );
    };

    const renderedBoard = props.squares.map((square, index) => renderSquare(index));

    return (
        <div className="board">
            {renderedBoard}
        </div>
    );
};

export default Board;
