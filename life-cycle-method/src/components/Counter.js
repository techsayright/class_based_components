import React, { Component } from 'react'
import ErrorBoundary from './ErrorPage/ErrorBoundary'
import Methods from './Methods'

export default class Counter extends Component {
    constructor(){
        super()
        this.state={
            incr :1,
            isToggle: true
        }
    }
    updateState=()=>{
        this.setState({incr: this.state.incr + 1})
    }
    toggleFun=()=>{
        this.setState({isToggle: !this.state.isToggle})
    }
    render() {
        return (
            <div>
                <ErrorBoundary>
                    {this.state.isToggle && <Methods incVal = {this.state.incr} />}
                    <button onClick={()=>{this.updateState()}}>Increment</button> <br /><br />
                    <button onClick={()=>{this.toggleFun()}}>toggle</button>
                </ErrorBoundary>
            </div>
        )
    }
}
