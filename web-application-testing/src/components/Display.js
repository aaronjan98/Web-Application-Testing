import React from 'react';

const Display = props => {

    return (
        <div className="Display">
            <div>
                <p data-testid="ball-score">Ball: {props.ball}</p>
                <p data-testid="strike-score">Strikes: {props.strike}</p>
            </div>
        </div>
    );
}

export default Display;