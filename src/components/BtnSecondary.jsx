import "./styles/BtnPrimary.css";

function BtnSecondary({ click }) {
  return (
    <button type="submit" className="Btn__secondary" onClick={click}>
      Procesando...
    </button>
  );
}

export default BtnSecondary;
