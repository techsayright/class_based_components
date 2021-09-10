import React, { PureComponent } from 'react'

export default class PureCom extends PureComponent {
    render() {
        console.log("pure com");
        return (
            <h1>Hello, {this.props.name} from PureComponents</h1>
        )
    }
}
