import { useContext, useState } from "react";
import Badge from "../components/Badge";
import "../pages/styles/BadgeNew.css";
import Navbar from "../components/Navbar";
import BtnPrimary from "../components/BtnPrimary";
import BtnSecondary from "../components/BtnSecondary";
import BtnDisable from "../components/BtnDisable";
import Layout from "../components/Layout";
import AppContext from "../context/AppContext";

function BadgeNew() {
  const { usuario, handleInputChange, handleSaveData } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  let component;

  function handleClick(e) {
    e.preventDefault();
    setLoading(true);
  }

  if (
    usuario.hashtag.length &&
    usuario.username.length &&
    usuario.nameUser.length &&
    usuario.description.length > 5
  ) {
    component = <BtnPrimary click={handleSaveData} />;
  } else {
    component = <BtnDisable />;
  }

  return (
    <Layout>
      <div className="BadgeNew__container">
        <div className="BadgeNew__right">
          <form action="">
            <input
              type="text"
              name="nameUser"
              placeholder="Tu nombre"
              className="BadgeNew__field"
              value={usuario.nameUser}
              onChange={handleInputChange}
            />
            <textarea
              name="description"
              placeholder="Escriba su descripción"
              className="BadgeNew__field"
              value={usuario.description}
              onChange={handleInputChange}
              cols="30"
              rows="3"
            ></textarea>
            <input
              type="text"
              name="username"
              placeholder="Mi username"
              className="BadgeNew__field"
              value={usuario.username}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="hashtag"
              placeholder="Hashtag"
              className="BadgeNew__field"
              value={usuario.hashtag}
              onChange={handleInputChange}
            />
            {component}
          </form>
        </div>
        <div className="BadgeNew__left">
          <Badge
            name={usuario.nameUser}
            hashtag={usuario.hashtag}
            description={usuario.description}
            userName={usuario.username}
            isLoading={loading}
          />
        </div>
      </div>
    </Layout>
  );
}

export default BadgeNew;
