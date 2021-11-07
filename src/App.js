import SelectInfo from "./components/views/SelectPage/SelectInfo"
import Background from './components/static/milky-way.jpg';

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${Background})`}}>
      <SelectInfo></SelectInfo>
    </div>
  );
}

export default App;
