import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  // const [myStyle, setStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // });

  const switchMode = () => {
    if (mode === 'light') {
      setMode('dark');
      // setStyle({
      //   color: 'white',
      //   backgroundColor: 'black'
      // });
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      // setStyle({
      //   color: 'black',
      //   backgroundColor: 'white'
      // });
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
    
    <Navbar title="Textutils" mode={mode} switchMode={switchMode} />
    <Alert alert={alert} />
    <div className="container my-3">
     
      {/* Content without routing */}
      {/* <About myStyle={myStyle} /> */}
      <Textform showAlert={showAlert} heading="Enter your text here" />
    </div>
  </>
  
  );
}

export default App;
