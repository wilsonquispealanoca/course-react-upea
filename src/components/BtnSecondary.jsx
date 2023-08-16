import { useContext } from "react";
import "./styles/BtnPrimary.css";
import AppContext from "../context/AppContext";

function BtnSecondary() {
  const { handleCleanData } = useContext(AppContext);
  return (
    <button type="submit" className="Btn__secondary" onClick={handleCleanData}>
      Limpiar Datos
    </button>
  );
}

export default BtnSecondary;
