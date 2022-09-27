import React from 'react';

const Device = (props) => {
    return (
        <div>
            <h2>I have: {props.name}</h2>
            <p>Price: {props.price}</p>
        </div>
    );
};

export default Device;