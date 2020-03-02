import React from 'react';
import HistoryItem from './HistoryItem';

const renderHistoryItem = (onClick, index, currentMove, buttonText) => {
    return (
        <HistoryItem
            onClick={() => onClick(index)}
            currentMove={currentMove}
            value={buttonText}
        />
    );
};

export default renderHistoryItem;
