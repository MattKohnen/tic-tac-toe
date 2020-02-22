import React from 'react';
import Square from './Square';

const renderSquare = (squares, onClick, index) => {
    return (
        <Square
            key={index}
            value={squares[index]}
            onClick={() => onClick(index)}
        />
    );
};

export default renderSquare;
