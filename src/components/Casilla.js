import "./Casilla.css";

const Casilla = ({ indice, onClickCasilla, valor }) => {
  const clickHandler = (indice) => {
    if (!valor) {
      onClickCasilla(indice);
    }
  };

  return (
    <button
      className="casilla"
      onClick={() => clickHandler(indice)}
      disabled={valor}
    >
      {valor}
    </button>
  );
};

export default Casilla;
