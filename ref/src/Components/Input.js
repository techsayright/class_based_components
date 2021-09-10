import React, { Component, createRef } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = createRef();
    }
    
    focusInput = ()=>{
        this.inputRef.current.focus();
        this.inputRef.current.value = "darshan"
    }

    nameHolder=()=>{
        console.log("hello");
    }
    render() {
        return (
            <div>
                <input ref={this.inputRef} type="text" placeholder="Enter Here"/>
            </div>
        )
    }
}



// function Input(props , ref) {
//     return (
//         <div>
//             <input type="text" ref={ref}/>
//         </div>
//     )
// }

// export default React.forwardRef(Input)
