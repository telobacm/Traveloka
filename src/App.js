import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Navbar";
import Slide from "./Components/Carousel";
import TiketPesawat from "./Forms/TiketPesawat";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Slide /> */}
      <TiketPesawat />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Traveluka Abal-Abal</h2>
      </header>
    </div>
  );
}

export default App;
