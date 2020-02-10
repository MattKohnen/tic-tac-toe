import React, {useState} from 'react';
import {calculateWinner} from '../utils';
import Board from './Board';

const Game = (props) => {
    // State management
    const [history, setHistory] = useState([{squares: Array(9).fill(null),}]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    // END state management

    // Vars
    const current = history[stepNumber]; // Current history object
    const winner = calculateWinner(current.squares);
    let status;
    if(winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O')
    }
    // END vars

    const jumpTo = (step) => {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    };

    const handleClick = (i) => {
        //const history = history; // Array of history objects
        // Copy array of history objects (don't mutate original) up until current step
        // (Throw away any "future" history after current step if we've gone back in time)
        const _history = history.slice(0, stepNumber + 1);
        const current = _history[_history.length - 1]; // Most recent history object
        const _squares = current.squares.slice(); // Copy `squares` array (don't mutate original)
        if (calculateWinner(_squares) || _squares[i]) {
            return;
        }
        _squares[i] = xIsNext ? 'X' : 'O';
        // `.concat` returns new array
        setHistory(_history.concat([{squares: _squares}]));
        setStepNumber(_history.length);
        setXIsNext(!xIsNext);
    };

    // Map history of moves to React elements (buttons)
    // `.map` takes a function, calls it on each item of original array, & returns new array
    const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        )
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares} // Extract out the `squares` array from the most current history object
                    onClick={(i) => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
};

export default Game;
