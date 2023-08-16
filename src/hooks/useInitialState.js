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

  const handleSaveData = () => {
    setListUser([...listUser, usuario]);

    //Limpiar el formulario
    setUsuario({
      nameUser: "",
      description: "",
      hashtag: "",
      username: "",
    });
  };
  return { usuario, handleInputChange, listUser, handleSaveData };
};

export default useInitialState;
