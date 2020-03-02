import React from 'react';

const renderHistoryList = (history, onClick, renderHistoryItem, stepNumber) => {
    return (
        // Map history of moves to React elements (buttons)
        // `.map` takes a function, calls it on each item of original array, & returns new array
        // 1st arg: item in original array
        // 2nd arg: index of iteration
        history.map((eachHistoryObject, index) => {
            const currentMove = index === stepNumber;
            const buttonText = index ?
                (eachHistoryObject.moves[index-1]) :
                'Go to game start';

            return (
                <li key={index}>
                    {renderHistoryItem(onClick, index, currentMove, buttonText)}
                </li>
            )
        })
    )
};

export default renderHistoryList;
