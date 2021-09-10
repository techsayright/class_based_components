import React, { Component } from 'react'
import User from './User'
import styled from 'styled-components'
import ErrorBoundary from './ErrorPage/ErrorBoundary'

export default class Toggle extends Component {

    constructor(){
        super()
        this.state={
            isUserShow : true,
            inputVal: ""
        }
    }

    toggleFun(){
        console.log(this);
        this.setState({isUserShow: !(this.state.isUserShow)})
    }

    Button = styled.button`
        background-color: yellow;
        color: grey;
        padding:  1rem 2rem;
        font-size: 1.5rem;
        border: .1rem solid black;
        font-weight: 700;
        cursor: pointer;
        &:hover{
            background-color: #ffff00a7;
            color: black;
        }
        &:active{
            background-color: red;
            color:yellow;
        }
    `;


    render() {
        return (
            <div>
                <h1>Class Based Components Demo</h1>
                <input type="text" placeholder="search" onChange={(e)=>{this.setState({inputVal: e.target.value})}} /> <br /><br />
                <ErrorBoundary>
                    <this.Button onClick={this.toggleFun.bind(this)} >Toggle it</this.Button>
                    {this.state.isUserShow && <User input= {this.state.inputVal}/>}
                </ErrorBoundary>
            </div>
        )
    }
}
