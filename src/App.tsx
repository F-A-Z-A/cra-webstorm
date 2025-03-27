import React from "react";

import "./App.css";

function App() {
  const logoutHandler = () => {
    alert("Logout");
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="enter your login" />
      <h1>Profile</h1>
      <img src="#" alt="image not found" />
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default App;
