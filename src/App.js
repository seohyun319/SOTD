import Background from './components/static/milky-way.jpg';
import SelectPage from "./components/views/SelectPage/SelectPage";
import FortunePage from './components/views/FortunePage/FortunePage';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App" 
      // style={{backgroundImage:`url(${Background})`}}
      >        
        <Routes>
          <Route path="/" element={<SelectPage />}></Route>
          <Route path="/fortune" element={<FortunePage />}></Route>
        </Routes>
      </div>
    </BrowserRouter> 
  );
}

export default App;