import "./App.css";
import React, { useState } from 'react'

// import About from './components/About';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";


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
      showAlert("Dark mode enabled","success")
     
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';

      showAlert("Light mode enabled","success")

    }
  }
  // 
  return (
    <>
    {/* <Router> */}
      <Navbar title="Textutils" about="About Textutil" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes>
          <Route exact path="/about"element={<About  mode={Mode} />}/> */}
          
          
          {/* <Route exact path="/"
         element= {<Textform heading="Try TextUtils - Word Counter and Character Counter, Reverse Text " mode={Mode} showAlert={showAlert} />}/>  */}
          <Textform heading="Try TextUtils - Word Counter and Character Counter, Reverse Text " mode={Mode} showAlert={showAlert} />
         {/* </Routes> */}
      </div>
      {/* </Router>  */}
    </>
  );
}

export default App;
