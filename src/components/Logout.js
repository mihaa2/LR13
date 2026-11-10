
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/userSlice";
import "./Logout.css";

function Logout() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="logout-container">
      <div className="logout-card">
        <h1>
          Welcome, {user?.name}!
        </h1>

        <p>Ви успішно увійшли до системи.</p>

        <p>
          Email: {user?.email}
        </p>

        <button
          type="button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Logout;
