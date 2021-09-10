import React, { Component } from 'react'

export default class RegCom extends Component {
    render() {
        console.log("reg com");
        return (
            <h1>Hello, {this.props.name} from Regular Components</h1>
        )
    }
}
