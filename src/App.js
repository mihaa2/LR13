
import React from "react";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Logout from "./components/Logout";
import "./App.css";

function App() {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="App">
      {user ? <Logout /> : <Login />}
    </div>
  );
}

export default App;
