import React from 'react';

const Display = props => {

    return (
        <div className="Display">
            <div>
                <p>{props.ball}</p>
            </div>
        </div>
    );
}

export default Display;