import Background from './components/static/milky-way.jpg';
import SelectPage from "./components/views/SelectPage/SelectPage";

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${Background})`}}>
      <SelectPage></SelectPage>
    </div>
  );
}

export default App;
