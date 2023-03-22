import {Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Homepage from "./components/homepage/Homepage";
import Nav from "./components/nav/Nav";
import About from "./components/about/About"
import AnimatedCursor from "react-animated-cursor"
import Upload from "./components/upload/Upload"

function App() {
  const [darkMode,setDarkMode] = useState(false)
  const handleDarkMode = ()=>{
    setDarkMode(darkMode => !darkMode)
  }
  console.log(darkMode);
  return (
    <div className="app">
      <Nav darkMode={darkMode}/>
      <Routes>
        <Route path="/" element={<Homepage darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
        <Route path="/info" element={<About darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
      </Routes>
      <AnimatedCursor 
        innerSize={16}
        outerSize={5}
        color='14, 13, 13'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
    </div>
  );
}

export default App;
