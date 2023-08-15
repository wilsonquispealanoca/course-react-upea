import "./styles/BtnPrimary.css";

function BtnPrimary({ click }) {
  return (
    <button type="submit" className="Btn__primary" onClick={click}>
      ENVIAR DATOS
    </button>
  );
}

export default BtnPrimary;
