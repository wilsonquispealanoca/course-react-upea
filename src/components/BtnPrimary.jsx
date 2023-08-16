import { useContext } from "react";
import "./styles/BtnPrimary.css";
import AppContext from "../context/AppContext";

function BtnPrimary({ click }) {
  const { handleSaveData } = useContext(AppContext);
  return (
    <button type="submit" className="Btn__primary" onClick={handleSaveData}>
      ENVIAR DATOS
    </button>
  );
}

export default BtnPrimary;
