import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

    constructor(){
        super()
        this.state={
            Err:"" ,
            hasError: false
        }
    }

    componentDidCatch(err){
        console.log(err);
        this.setState({Err: err.toString(), hasError:true})

    }

    render() {
        return (
            <div>
                {this.state.hasError ? <h1>{this.state.Err}</h1> : this.props.children}
                
            </div>
        )
    }
}
