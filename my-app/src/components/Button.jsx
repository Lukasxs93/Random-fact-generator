import React from "react";

const Button=(props)=>{
   
    return(
        <button  onClick={props.handleClick} style={props.style.button}>Click me</button>
    );
}
export default Button;