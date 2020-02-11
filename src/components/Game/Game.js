import React, {useState} from 'react';
import Status from '../Status';
import getStatus from './getStatus';
import Board from '../Board';
import handleClick from './handleClick';
import History from '../History';
import getHistory from './getHistory';

const Game = (props) => {
    // State management
    const [history, setHistory] = useState([{squares: Array(9).fill(null),}]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    // ES6 Prop Shorthand
    const gameState = {
        history,
        setHistory,
        stepNumber,
        setStepNumber,
        xIsNext,
        setXIsNext,
    };
    // END state management

    const current = history[stepNumber]; // Current history object

    return (
        <div className="game">
            <div className="game-info">
                <Status
                    status={getStatus(current, xIsNext)}
                />
            </div>

            <div className="game-board">
                <Board
                    squares={current.squares} // Extract out the `squares` array from the most current history object
                    onClick={(i) => handleClick(gameState, i)}
                />
            </div>

            <div className="game-info">
                <History
                    moves={getHistory(gameState)}
                />
            </div>
        </div>
    );
};

export default Game;
