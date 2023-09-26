
import Navbar from './Components/Navbar'
import Alert from './Components/Alert';
import About from './Components/About';
import TextForm from './Components/TextForm';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
  }
  setTimeout(() => {
    setAlert(null)
  }, 1500);
  const toggleMode=()=>
  {
    if(mode ==="dark"){
      setMode("light")
      document.body.style.backgroundColor='white';
      showAlert("Light mode is been activated","success")
    }
    else{
      setMode("dark")
      document.body.style.backgroundColor='black';
      showAlert("Dark mode is been activated","success")
  }}
  return (
  
 
    <Router>
    <Navbar title = "TextUtils" offers ="Offers" about = "About TextUtils" Mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
        <Routes>   
          <Route path="/about" element={<About Mode={mode}/>} />
          <Route path="/" element={<TextForm placeHolder='Enter Your Text Here' Heading = 'TRY IT UP' Mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
   </Router>
        
    
    
  );
}

export default App;
