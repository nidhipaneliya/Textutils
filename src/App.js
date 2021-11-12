import "./App.css";
import React, { useState } from 'react'

import About from './components/About';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message,type)=>{
    setAlert({
      msg :message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode= () =>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#070f35';
      // document.button.style.backgroundColor='#070f35'
      showAlert("Dark mode enabled","success")
      document.title="Textutils-Dark mode"
      // setInterval(() => {
      //   document.title="Textutils is Amazing"
        
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install Textutils Now"
        
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      // document.button.style.backgroundColor='blue'

      showAlert("Light mode enabled","success")
      document.title="Textutils-Light mode"

    }
  }
  // const greenMode = () =>{
  //   if(Mode==='light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor='#0f6605';
  //     showAlert("Green mode enabled","success")

  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor='white';
  //     showAlert("Light mode enabled","success")

  //   }
  // }
  // const redMode = () =>{
  //   if(Mode==='light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor='#ea0a20';
  //     showAlert("Red mode enabled","success")

  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor='white';
  //     showAlert("Light mode enabled","success")

  //   }
  // }
  // const pinkMode = () =>{
  //   if(Mode==='light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor='#ca166f';
  //     showAlert("Pink mode enabled","success")

  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor='white';
  //     showAlert("Light mode enabled","success")

  //   }
  
  return (
    <>
    <Router>
      <Navbar title="Textutils" about="About Textutil" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about"element={<About />}/>
          
          
          <Route exact path="/"
         element= {<Textform heading="Enter the text to analyse" mode={Mode} showAlert={showAlert} />}/>
          
        </Routes>
        
        {/* <About/> */}
      </div>
      </Router>
    </>
  );
}

export default App;
