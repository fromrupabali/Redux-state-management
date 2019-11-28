import React, { Component } from 'react';

import CounterOutput from '../components/CounterOutput/CounterOutput';
import CounterControl from '../components/CounterControl/CounterControl';

import './Counter.css';

export default class Counter extends Component{
    state ={
        counter: 0
    }

    IncrementHandler = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    
    DeccrementHandler = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    AddHandler = () => {
        this.setState({
            counter: this.state.counter + 5
        })
    }

    SubtractHandler = () => {
        this.setState({
            counter: this.state.counter - 10
        })
    }
    render(){
        return(
            <div>
                <div className="CounterContainer">
                  <CounterOutput counter= {this.state.counter} />
                </div>
                <CounterControl 
                  Inc = { this.IncrementHandler}
                  Dec = { this.DeccrementHandler}
                  Add = { this.AddHandler}
                  Sub = { this.SubtractHandler}
                />
            </div>
        );
    }
}