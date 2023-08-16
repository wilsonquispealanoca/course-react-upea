import "./styles/Footer.css";
import LogoGitHub from "../assets/githubIcon.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="Footer__container">
          <img src={LogoGitHub} alt="" />
          <span className="Footer__title">View this repository</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
