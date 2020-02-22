import React from 'react';
import HistoryItem from './HistoryItem';

const renderHistoryItem = (onClick, index, desc) => {
    return (
        <HistoryItem
            value={desc}
            onClick={() => onClick(index)}
        />
    );
};

export default renderHistoryItem;
