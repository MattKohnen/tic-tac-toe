import React from 'react';
import jumpTo from './jumpTo';

const getHistory = (gameState) => {
    return (
        // Map history of moves to React elements (buttons)
        // `.map` takes a function, calls it on each item of original array, & returns new array
        // 1st arg: item in original array
        // 2nd arg: index of iteration
        gameState.history.map((step, move) => {
            const desc = move ?
                'Go to move at (' + step.moves[move-1].col + ', ' + step.moves[move-1].row + ')' :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(gameState.setStepNumber, gameState.setXIsNext, move)}>{desc}</button>
                </li>
            )
        })
    )
};

export default getHistory;
