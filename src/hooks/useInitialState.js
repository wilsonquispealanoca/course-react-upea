import { useState } from "react";

const useInitialState = () => {
  const [usuario, setUsuario] = useState({
    nameUser: "",
    description: "",
    hashtag: "",
    username: "",
  });

  function handleInputChange(e) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  const [listUser, setListUser] = useState([]);

  const handleSaveData = (e) => {
    e.preventDefault();
    setListUser([...listUser, usuario]);
  };

  const handleCleanData = (e) => {
    e.preventDefault();
    //Limpiar el formulario
    setUsuario({
      nameUser: "",
      description: "",
      hashtag: "",
      username: "",
    });
  };

  return {
    usuario,
    handleInputChange,
    listUser,
    handleSaveData,
    handleCleanData,
  };
};

export default useInitialState;
