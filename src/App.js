import "./style.css";
import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [users, setUsers] = useState();
  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    setUsers(data.data);
  };

  return (
    <>
      <nav class="navbar">
  <div class="container-fluid">
    <h1 class="navbar2">Users Assosiation</h1>
      <button class="btn btn-outline-success btn-lg" type="submit" onClick={getUsers}>Get User</button>
  </div>
</nav>
      
      <div className="row1">
        {users?.map((ids, index) => {
          return (
            <div className="card column1" key={index}>
              <img src={ids.avatar} className="card-img-top1" alt="..." />
              <div className="card-body1">
                <h3 className="card-title1">{ids.first_name} {ids.last_name}</h3>
                <h4 className="card-text1">{ids.email}</h4>
                <h4 className="card-text2">ID - {ids.id}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;