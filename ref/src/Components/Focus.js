import React, { Component, createRef } from 'react'
import Input from './Input'

export default class Focus extends Component {
    constructor(props) {
        super(props)
    
        this.focusRef = createRef();
    }

    btnHandler=()=>{
        this.focusRef.current.focusInput()
        console.log(this.focusRef.current);
    }
    
    render() {
        return (
            <div>
                <br /><br />
                <Input ref={this.focusRef}/>
                <button onClick={this.btnHandler}>Focus</button>
            </div>
        )
    }
}
