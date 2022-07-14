import React from "react";
import Button from './Button'

const Container =(props)=>{
    function handleClick(){
        getQuote();
    }
    const getQuote =()=>{
        fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(response => response.json())
        .then(data =>{props.setMessage(data.text);
        console.log(data)});
    }
    return(
        <div className="container" id="container">
            <h2>Did You know ?</h2>
           <p>{props.message}</p>
           <Button handleClick={handleClick}/>
        </div>
    );
}

export default Container;