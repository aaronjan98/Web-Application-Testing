import React, { useState } from 'react';

const Dashboard = props => {
    const [Balls, setBalls] = useState();
    return (
        <div className='Dashboard'>
            <button className='ball' onClick={() => setBalls(Balls + 1)}>ball</button>
            <button className='strike'>strike</button>
            <button className='foul'>foul</button>
        </div>
    );
}

export default Dashboard;