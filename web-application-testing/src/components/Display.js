import React from 'react';

const Display = props => {

    return (
        <div className="Display">
            <div>
                <p>Ball: {props.ball}</p>
                <p>Strikes: {props.strike}</p>
            </div>
        </div>
    );
}

export default Display;