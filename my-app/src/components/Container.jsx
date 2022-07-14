import React from "react";
import Button from './Button'

const Container =(props)=>{
   
    const getQuote =()=>{
        fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(response => response.json())
        .then(data =>{props.setMessage(data.text);
        console.log(data)});
    }
    return(
        <div className="container" id="container" style={props.styles.div}>
            <h2>Did You know ?</h2>
           <p>{props.message}</p>
           <Button getQuote={getQuote} style={props.styles}/>
        </div>
    );
}

export default Container;