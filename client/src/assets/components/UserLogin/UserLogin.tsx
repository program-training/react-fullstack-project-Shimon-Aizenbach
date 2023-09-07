import { Link, useNavigate } from "react-router-dom";
import React, { useState, FormEvent } from "react";
import axios from "axios";
const authToken = localStorage.getItem("token")

const UserLogin: React.FC = () => {
  const [email, setEmail] = useState<string>(``);
  const [password, setPassword] = useState<string>(``);
  const navigate = useNavigate();
  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await axios.post(
      "http://localhost:3000/api/auth/login",
      { email, password },
      {
        headers: {
          "authorization ": authToken,
          "content-Type": "application/json",
        },
      }
    );
    console.log(`$status: {response.status} ${response.data.message}`);
    if(response.status === 200) localStorage.setItem("token", response.data.responseObj.token) 
    navigate("/trips");
    window.location.reload();
  };
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <h2>User Login</h2>
      <form onSubmit={handleLogin}>
      <label>
        Enter you'r email address
        <input
          type="email"
          placeholder="xxxxx@xxx.xxx"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Enter a password
        <input
          type="password"
          placeholder="Upper case, lower case and numbers"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <input type="submit" />
      </form>
    </div>
  );
};

export default UserLogin;
