import React from 'react';

const HistoryItem = (props) => {
    return (
        <button
            className="history-item"
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
};

export default HistoryItem;
