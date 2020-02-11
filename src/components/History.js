import React from 'react';

const History = (props) => {
    return (
        <div className="history">
            <p>History:</p>
            <ol>{props.moves}</ol>
        </div>
    );
};

export default History;
