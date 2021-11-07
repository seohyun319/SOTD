import Background from './components/static/milky-way.jpg';
import SelectPage from "./components/views/SelectPage/SelectPage";
import FortunePage from './components/views/FortunePage/FortunePage';
import ColorPage from './components/views/ColorPage/ColorPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './components/views/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App" 
      style={{backgroundImage:`url(${Background})`}}
      >        
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route path="/select" element={<SelectPage />}></Route>
          <Route path="/select/fortune" element={<FortunePage />}></Route>
          <Route path="/select/color" element={<ColorPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter> 
  );
}

export default App;