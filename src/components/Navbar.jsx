import { Link } from "react-router-dom";
import LogoImage from "../assets/logo.png";
import LogoImageDesktop from "../assets/logoDesktop.png";
import "./styles/Navbar.css";
import { useScreenDetector } from "../hooks/useScreenDetector";

function Navbar() {
  const { isDesktop, isMobile, isTablet } = useScreenDetector();

  return (
    <nav>
      <div className="Navbar__container">
        <Link to={`/`}>
          <div className="Navbar__brand">
            {isMobile && <img src={LogoImage} alt="logo" />}
            {isTablet && <img src={LogoImageDesktop} alt="logo" />}
            {isDesktop && <img src={LogoImageDesktop} alt="logo" />}
          </div>
        </Link>
        <Link to={`/badges`}>
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12h18M3 6h18M3 18h18"
                />
              </svg>
            </span>
          </button>
        </Link>
        <ul className="Navbar__links">
          <li>
            <Link to={`/`} className="Navbar__links-item">
              Home
            </Link>
          </li>
          <li>
            <Link to={`/badges`} className="Navbar__links-item">
              Badges
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
