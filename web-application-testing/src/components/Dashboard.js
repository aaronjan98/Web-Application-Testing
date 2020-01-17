import React, { useState } from 'react';

const Dashboard = ({ atBat, setAtBat, strike, setStrike, ball, setBall, hit, setHit, foul, setFoul }) => {



    if(strike >= 3 || ball >= 4 || hit === true){
        setBall(0);
        setStrike(0);
        setAtBat(atBat++);
        console.log(atBat);
    }
    
    if(foul){
        if(strike === 2){
            setStrike(strike);
        }else
            setStrike(strike += 2);
    }


    return (
        <div className='Dashboard'>
            <button className='ball' onClick={() => setBall(ball++)}>ball</button>
            <button className='strike' onClick={() => setStrike(strike++)}>strike</button>
            <button className='foul' onClick={() => setFoul(foul++)}>foul</button>
            <button className='hit' onClick={() => setHit(hit++)}>hit</button>
        </div>
    );
}

export default Dashboard;