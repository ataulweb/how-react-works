import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border:'1px solid gray', margin:'15px', backgroundColor:'green'}}>
            <h3>This is Dail</h3>
            <p>Steps so Far: {props.steps}</p>
        </div>
    );
};

export default Dial;