import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterOutput from '../components/CounterOutput/CounterOutput';
import CounterControl from '../components/CounterControl/CounterControl';
import * as actionTypes from '../store/actions';

import './Counter.css';

 class Counter extends Component{
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
                  <CounterOutput counter= {this.props.ctr} />
                </div>
                <CounterControl 
                  Inc = { this.props.onIncrimentCounter}
                  Dec = { this.props.onDecrementCounter}
                  Add = { this.props.onAddCounter}
                  Sub = { this.props.onSubCounter}
                />
                <hr></hr>
                <button className="StoreButton" onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
                <div className="Result">
                  <ul>
                    {this.props.storedResults.map(storeResult => (
                       <li key={storeResult.id} onClick={ ()=>this.props.onDeleteResult(storeResult.id)}>{storeResult.counter}</li>
                   ))}
                  </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onIncrimentCounter: () => dispatch({type:actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type:actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type:actionTypes.ADD, val: 5}),
        onSubCounter: () => dispatch({type:actionTypes.SUB, val: 10}),
        onStoreResult: (result) => dispatch({type:actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type:actionTypes.DELETE_RESULT, resultElId: id})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);