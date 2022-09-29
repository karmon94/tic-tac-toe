import { useNavigate } from "react-router-dom";
import "./MainScreen.css";

const MainScreen = () => {
  const navigation = useNavigate();

  const onClickHandler = () => {
    navigation("players");
  };

  return (
    <div className="main-screen-container">
      <div className="title">
        <h1>Tic-Tac-Toe</h1>
      </div>
      <button className="start-button" type="button" onClick={onClickHandler}>
        Start
      </button>
    </div>
  );
};

export default MainScreen;
