const renderBoard = (squares, onClick, renderSquare) => {
    return squares.map((square, index) => {
        return renderSquare(squares, onClick, index)
    });
};

export default renderBoard;
