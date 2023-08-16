function ItemUser({ name, description, username, hashtag }) {
  return (
    <div className="container">
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>UserName</th>
              <th>Hashtag</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>{description}</td>
              <td>{username}</td>
              <td>{hashtag}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ItemUser;
