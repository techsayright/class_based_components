import React, { Component } from "react";
import styled from "styled-components";
import UserContext from  '../store/user-context'

export default class User extends Component {

  static contextType = UserContext;

  constructor(props){
    super(props);
    this.state={
      data: []
    }
  }
  
  componentDidMount(){
    this.setState({data: this.context.data})
    console.log("user component just mount");
  }

  componentWillUnmount(){
    console.log("user components just unmount");
  }
  
  componentDidUpdate(preProps , preState){
    if(preProps.input !== this.props.input){
        this.setState({data: this.context.data.filter((v)=>v.name.includes(this.props.input))})
      }
      
    if(this.state.data.length===0){
      throw new Error("No Value Found")
    }
  }

  Div= styled.div`
    background-color: yellow;
    margin: 2rem 30%;
    padding: 2rem;
  `;


  render() {
    console.log("render of user");
    return (
      <this.Div>
        {this.state.data.map((v) =><h1 key={v.id}>{v.name}</h1>)}
        {/* {this.props.input} */}
      </this.Div>
    );
  }
}
