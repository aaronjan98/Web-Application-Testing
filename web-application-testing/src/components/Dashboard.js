import React from 'react';

const Dashboard = ({ strike, setStrike, ball, setBall }) => {

    if(strike >= 3 || ball >= 4){
        setBall(0);
        setStrike(0);
    }
    
    const foulUpdate = () => {
        if(strike >= 2){
            setStrike(2);
        }else
            setStrike(strike + 1);
    }

    return (
        <div className='Dashboard'>
            <button className='ball' onClick={() => setBall(ball+1)}>ball</button>
            <button className='strike' onClick={() => setStrike(strike+1)}>strike</button>
            <button className='foul' onClick={() => foulUpdate()}>foul</button>
            <button className='hit' onClick={() => {
                setBall(0);
                setStrike(0);
            }}>hit</button>
        </div>
    );
}

export default Dashboard;