import React from 'react';
import { ballState } from '../utils/ball';

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
            <button className='ball' data-testid="ball-button" onClick={() => setBall(ballState)}>ball</button>
            <button className='strike' data-testid="strike-button" onClick={() => setStrike(strike+1)}>strike</button>
            <button className='foul' data-testid="foul-button" onClick={() => foulUpdate()}>foul</button>
            <button className='hit' data-testid="hit-button" onClick={() => {
                setBall(0);
                setStrike(0);
            }}>hit</button>
        </div>
    );
}

export default Dashboard;