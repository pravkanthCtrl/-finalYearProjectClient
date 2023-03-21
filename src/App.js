import {Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from "./components/homepage/Homepage";
import Nav from "./components/nav/Nav";
import About from "./components/about/About"
import AnimatedCursor from "react-animated-cursor"
import InfoPage from "./components/info/InfoPage";
import Upload from "./components/upload/Upload"

function App() {
  return (
    <div className="app">
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/info" element={<About/>}/>
        <Route path="/graph" element={<Upload/>}/>
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
