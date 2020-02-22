import React from 'react';
import renderHistoryList from './renderHistoryList';
import renderHistoryItem from '../HistoryItem/renderHistoryItem';

const History = (props) => {
    return (
        <div className="history">
            <p>History:</p>
            <ol>
                {renderHistoryList(props.history, props.onClick, renderHistoryItem)}
            </ol>
        </div>
    );
};

export default History;
