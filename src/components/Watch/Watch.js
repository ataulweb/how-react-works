import React, { useState } from 'react';
import Dial from '../Dial/Dial';
import Display from '../Display/Display';


const Watch = () => {
    const [steps, setSteps]= useState(0);
    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }
    return (
        <div style={{border: '1px solid tomato', margin: '20px', backgroundColor: 'gray', color:'white'}}>
            <h2>This is my smart Watch</h2>
            <h3>My Current Steps: {steps}</h3>
            <button style={{padding:'10px 25px'}} onClick={increaseSteps}>Walk</button>
            <Display name='AmazFit Bip' steps={steps}></Display>
                        
        </div>
    );
};

export default Watch;