import { Link } from "react-router-dom";
import LogoImage from "../assets/logo.png";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="Navbar__container">
          <div className="Navbar__brand">
            <img src={LogoImage} alt="" />
          </div>
          <button className="Navbar__menu">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="#8fa3bf"
                  strokeLineCap="round"
                  strokeLineJoin="round"
                  strokeWidth="2"
                  d="M3 12h18M3 6h18M3 18h18"
                />
              </svg>
            </span>
          </button>
          <ul className="Navbar__links">
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/badges`}>Badges</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
