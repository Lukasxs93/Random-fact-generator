import React from "react";

const Button=(props)=>{
   
    return(
        <button  onClick={props.handleClick}>Click me</button>
    );
}
export default Button;