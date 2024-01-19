// import logo from './logo.svg';
import './App.css';
import{ Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Esindused from './pages/Esindused';
import Arikliendile from './pages/Arikliendile';
import Kinkekaart from './pages/Kinkekaart';

function App() {
  return (
    <div className="App">
      <Link to="avaleht">
        <img src="https://upload.wikimedia.org/wikipedia/en/9/99/Nobe_GT100.jpg" className= "pilt" alt="Nobe GT100" />
      </Link>
      <Link to="esindused">
        <img src="/esindused.svg" alt="" />
        <button className="nupp">ESINDUSED</button>
      </Link>
      
      <Link to="arikliendile">
        <img src="/arikliendile.svg" alt="" />
        <span>Ärikliendile</span>
      </Link>

      <Link to="osta-kinkekaart">
        <img src="/kinkekaart.svg" alt="" />
        <button className="nupp">OSTA KINKEKAART</button>
      </Link>

      {/* <p></p>
      <h1>Pealkiri1</h1>
      <h2>Pealkiri2</h2>
      <h3>Pealkiri3</h3> */}

      <Routes>
        <Route path="avaleht" element={ <Avaleht /> } />
        <Route path="esindused" element={ <Esindused /> } />
        <Route path="arikliendile" element={ <Arikliendile /> } />
        <Route path="osta-kinkekaart" element={ <Kinkekaart /> } />
      </Routes>

    </div>
  );
}

export default App;
