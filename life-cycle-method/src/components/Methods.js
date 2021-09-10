import React, { Component } from 'react'

export default class Methods extends Component {
    constructor(props){
        console.log("constructor");
        super(props);
        this.state={
            dblVal: props.incVal
        }
    }

    /******************* 
    @Purpose : mounting components
    @Parameter : {props,state}
    @Author : DARSH
    ******************/
    static getDerivedStateFromProps(props ,preState){
        console.log(props.incVal, preState.dblVal );
        return {
            dblVal: props.incVal *2
        }
    }

    componentDidMount(){
        console.log("mount");
    }

    /******************* 
    @Purpose : updating components
    @Parameter : {props, state}
    @Author : DARSH
    ******************/
    shouldComponentUpdate(props , state){
        console.log("scu"+ props.incVal , state.dblVal);
        if(state.dblVal >=54 ){
            console.log("arrreee");
            throw new Error("We have stopped Execution after 50 state count")
        }
        if(state.dblVal >= 50){
            return false
        }
        return true
    }

    getSnapshotBeforeUpdate(preProps ,preState){
        console.log("gsbu "+ preProps.incVal, preState.dblVal);

        return preState.dblVal * preProps.incVal
    }

    componentDidUpdate(preProps , preState , snapshot){
        console.log(preProps.incVal, preState.dblVal , snapshot);
    }

    /******************* 
    @Purpose : updating components
    @Parameter : {props, state}
    @Author : DARSH
    ******************/
   componentWillUnmount(){
       console.log('unmount');
   }

    
    render() {
        console.log("render");
        return (
            <div>
                <h2>{`state val: ${this.state.dblVal}`}</h2>
                <h1>{this.props.incVal}</h1>
            </div>
        )
    }
}
