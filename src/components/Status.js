import React from 'react';

const Status = (props) => {
    return (
        <div className="status">
            <p>{props.status.label}: {props.status.player}</p>
        </div>
    );
};

export default Status;
