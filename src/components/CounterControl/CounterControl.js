import React from 'react';

import './CounterControl.css';

const CounterControl = (props) => (
    <div className="CounterControl">
       <button onClick={props.Inc}>Increment</button>
       <button onClick={props.Dec}>Decrement</button>
       <button onClick={props.Add}>Add 5</button>
       <button onClick={props.Sub}>Subtract 10</button>
    </div>
); 
export default CounterControl;