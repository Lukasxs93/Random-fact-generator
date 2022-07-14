import Container from './components/Container';
import{useState} from 'react';
import './App.css';

function App() {
  const Styles = {
    body:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignContent:"center"
    }
  }
   const[message, setMessage]=useState('Press the button to get a random fact !')
  return (
    <Container message={message} setMessage={setMessage}/>
  );
}

export default App;
