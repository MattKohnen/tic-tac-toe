import getWinner from './getWinner';
import getCoordinates from './getCoordinates';

const handleClick = (gameState, i) => {
    // Copy array of history objects (don't mutate original) up until current step
    // (Throw away any "future" history after current step if we've gone back in time)
    const _history = gameState.history.slice(0, gameState.stepNumber + 1);
    const current = _history[_history.length - 1]; // Most recent history object
    const _squares = current.squares.slice(); // Copy array (don't mutate original)

    if (getWinner(_squares) || _squares[i]) {
        return;
    }

    const _moves = current.moves.slice(); // Copy array (don't mutate original)
    _moves.push(getCoordinates(current.squares, i));
    _squares[i] = gameState.xIsNext ? 'X' : 'O';
    gameState.setHistory(_history.concat([{squares: _squares, moves: _moves}])); // `.concat` returns new array
    gameState.setStepNumber(_history.length);
    gameState.setXIsNext(!gameState.xIsNext);
};

export default handleClick;
