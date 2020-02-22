import React from 'react';

const renderHistoryList = (history, onClick, renderHistoryItem) => {
    return (
        // Map history of moves to React elements (buttons)
        // `.map` takes a function, calls it on each item of original array, & returns new array
        // 1st arg: item in original array
        // 2nd arg: index of iteration
        history.map((eachHistoryObject, index) => {
            const desc = index ?
                (eachHistoryObject.moves[index-1]) :
                'Go to game start';
            return (
                <li key={index}>
                    {renderHistoryItem(onClick, index, desc)}
                </li>
            )
        })
    )
};

export default renderHistoryList;
