import React, { Component } from 'react'
import img from '../../img/errr.jpg'

export default class ErrorBoundary extends Component {
    constructor(){
        super();
        this.state= {
            err: "",
            hasErr : false
        }
    }

    // it can change state directly
    static getDerivedStateFromError(err){
        return{
            err: err.toString(),
            hasErr: true
        }
    }
    render() {
        return (
            <div>
                { this.state.hasErr ? 
                
                <div>
                    <br /><br />
                    <img src={img} alt="Error_image" />
                    <h1>{this.state.err}</h1>
                </div> 
                
                : this.props.children}
            </div>
        )
    }
}
