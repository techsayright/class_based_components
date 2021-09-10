import React, { Component, PureComponent } from 'react'
import styled from 'styled-components'
import PureCom from './PureCom';
import RegCom from './RegCom'

const Button = styled.button`
    background-color: yellow;
    padding: 1rem;
    font-size: 1rem;
    border:.2rem solid black;

    &:hover{
        background-color: #ffff0076;
    }
    &:active{
        background-color: yellow;
    }
`;

// this pureComponents do shallow comparison of state
export default class ParentCom extends Component {
// export default class ParentCom extends PureComponent {
    constructor() {
        super()
    
        this.state = {
            //  name: ["darshan","dev"]
            name: "darshan"
        }
    }

    changeName=()=>{
        // this.setState({name:["darshan", "dev"]})
        this.setState({name:"darshan"})
    }
    
    render() {
        console.log("parent com");
        return (
            <div>
                <RegCom name= {this.state.name}/>
                <PureCom name={this.state.name}/>
                <Button onClick={this.changeName}>Change Name</Button>
            </div>
        )
    }
}
