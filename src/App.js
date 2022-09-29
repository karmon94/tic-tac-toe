import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainScreen from "./components/MainScreen";
import PlayerForm from "./components/PlayerForm";
import Tablero from "./components/Tablero";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <MainScreen /> },
    { path: "players", element: <PlayerForm /> },
    { path: "game", element: <Tablero /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
