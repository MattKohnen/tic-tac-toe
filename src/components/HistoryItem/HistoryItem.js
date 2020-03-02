import React from 'react';

const HistoryItem = (props) => {
    const buttonStyle = props.currentMove ?
        {fontWeight:'bold'} :
        null;

    return (
        <button
            className="history-item"
            onClick={props.onClick}
            style={buttonStyle}
        >
            {props.value}
        </button>
    );
};

export default HistoryItem;
