import React, {useState} from 'react';
import Status from '../Status/Status';
import getStatus from '../Status/getStatus';
import Board from '../Board/Board';
import handleSquareClick from '../Square/handleSquareClick';
import History from '../History/History';
import handleHistoryItemClick from '../HistoryItem/handleHistoryItemClick';

const Game = (props) => {
    // State management
    const [history, setHistory] = useState([{squares: Array(9).fill(null), moves: []}]);
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

    const squares = history[stepNumber].squares;// Extract out the `squares` array from the most current history object
    const status = getStatus(squares, xIsNext);

    return (
        <div className="game">
            <div className="game-info">
                <Status
                    status={status}
                />
            </div>

            <div className="game-board">
                <Board
                    squares={squares}
                    onClick={(i) => handleSquareClick(gameState, i)}
                />
            </div>

            <div className="game-info">
                <History
                    history={history}
                    onClick={(i) => handleHistoryItemClick(setStepNumber, setXIsNext, i)}
                />
            </div>
        </div>
    );
};

export default Game;
