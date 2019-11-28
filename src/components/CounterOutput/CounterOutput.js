import React from 'react';

import './CounterOutput.css';

const counterOutput = (props) => (
    <div className="CounterOutput">
        <h5>Current Counter : {props.counter}</h5>
    </div>
); 
export default counterOutput;