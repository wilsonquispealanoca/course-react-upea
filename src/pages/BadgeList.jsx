import { useContext } from "react";
import Layout from "../components/Layout";
import AppContext from "../context/AppContext";
import "../pages/styles/BadgeList.css";
import LayoutData from "../components/LayoutData";

function BadgeList() {
  const { listUser } = useContext(AppContext);
  console.log(listUser.length);
  return (
    <Layout>
      {listUser.length > 0 ? (
        <div className="Table__container">
          <table className="Table">
            <thead>
              <tr>
                <th className="Table__th">Name</th>
                <th className="Table__th">Description</th>
                <th className="Table__th">UserName</th>
                <th className="Table__th">Hashtag</th>
              </tr>
            </thead>
            <tbody>
              {listUser.map((user, index) => (
                <tr key={index}>
                  <td className="Table__td Table__td-name">{user.nameUser}</td>
                  <td className="Table__td">{user.description}</td>
                  <td className="Table__td">{user.username}</td>
                  <td className="Table__td">{user.hashtag}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <LayoutData title="Aún no hay datos para mostrar" />
      )}
    </Layout>
  );
}

export default BadgeList;
