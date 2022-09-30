import "./Casilla.css";

const Casilla = ({ indice, onClickCasilla, valor, ganador }) => {
  const clickHandler = (indice) => {
    if (!valor) {
      onClickCasilla(indice);
    }
  };

  return (
    <button
      className="casilla"
      onClick={() => clickHandler(indice)}
      disabled={valor || ganador}
    >
      {valor}
    </button>
  );
};

export default Casilla;
