
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("Заповніть усі поля!");
      return;
    }

    dispatch(
      login({
        name: name.trim(),
        email: email.trim(),
      })
    );
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <p>Увійдіть до свого облікового запису</p>

        <label>Ім'я</label>
        <input
          type="text"
          placeholder="Введіть ім'я"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Введіть email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Пароль</label>
        <input
          type="password"
          placeholder="Введіть пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;
