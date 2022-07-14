import Container from './components/Container';
import{useState} from 'react';
import './App.css';

function App() {
  const styles = {
   
    div:{    
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      padding:"30px",      
      backdropFilter: "blur(16px) saturate(200%)",
      webkitBackdropFilter: 'blur(16px) saturate(200%)',
      backgroundColor: 'rgba(255, 255, 255, 0.28)',
      borderRadius: '12px',
      border: '1px solid rgba(209, 213, 219, 0.3)'      
    },
    button:{
      backdropFilter: 'blur(16px) saturate(200%)',
    webkitBackdropFilter: 'blur(16px) saturate(200%)',
    backgroundColor: '#7e27ed',
    borderRadius: '12px',
    border: '1px solid #4a179e',
    color:'#fdfbfb',
    padding:'10px'
    }
  }
   const[message, setMessage]=useState('Press the button to get a random fact !')
  return (
    <Container message={message} setMessage={setMessage} styles={styles}/>
  );
}

export default App;
