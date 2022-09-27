import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{border: '1px solid green', margin: '15px', backgroundColor:'tomato'}}>
        <h2>Name: {props.name}</h2>
        <p>SO far steps today: {props.steps}</p>
        <Dial steps={props.steps}></Dial>
        </div>
    );
};

export default Display;