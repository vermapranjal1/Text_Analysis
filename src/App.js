
import { useState } from "react";
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react';



function App() {
  const[mode, setMode]=useState("light");
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>
  {
     setAlert({
      msg:message, 
      type:type
    })
  }

  const toggleMode=()=>
  {
     if(mode==="light")
     {
      setMode("dark");
      document.body.style.backgroundColor="#212529";
      showAlert("Dark Mode have been enabled", "success ");
     }
     else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Dark Mode have been disabled", "success ");
     }
  }
  return(
  <>
  <Alert Alert={alert}/>
  <Navbar title="TextUtils" aboutText="About TextUtils" Mode={mode} ToggleMode={toggleMode} />
  <div className="container">
  <TextForm heading="Enter the text below" Mode={mode}/>
  
  </div>
  </>
  ); 
}

export default App;
