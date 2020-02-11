import React from 'react';
import jumpTo from './jumpTo';

const getHistory = (gameState) => {
    return (
        // Map history of getHistory to React elements (buttons)
        // `.map` takes a function, calls it on each item of original array, & returns new array
        gameState.history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
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
