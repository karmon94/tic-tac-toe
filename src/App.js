import "./App.css";
import Tablero from "./components/Tablero";

function App() {
  return (
    <div className="app-container">
      <div className="tablero">
        <Tablero />
      </div>

      <div className="info-juego">
        <div>{/* estado */}</div>
        <div>{/* TODO */}</div>
      </div>
    </div>
  );
}

export default App;
