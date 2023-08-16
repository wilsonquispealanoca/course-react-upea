import { Link } from "react-router-dom";
import "../components/BtnPrimary";
import LayoutData from "../components/LayoutData";

function NotFound() {
  return (
    <LayoutData title="404">
      <Link to={`/`}>
        <button className="Btn__primary">Ir al inicio</button>
      </Link>
    </LayoutData>
  );
}

export default NotFound;
