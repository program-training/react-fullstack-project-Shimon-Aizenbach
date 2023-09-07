import { Link, useNavigate } from "react-router-dom";
import React, { useState , FormEvent} from "react";
import "./UserRegistration.css";
import axios from "axios";
const authToken = localStorage.getItem("token")

const UserRegistration: React.FC = () => {
  const [email, setEmail] = useState<string>(``);
  const [password, setPassword] = useState<string>(``);
  const navigate = useNavigate();
  const handleRegistration = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const response = await axios.post(
      "http://localhost:3000/api/auth/register",
      { email, password },
      {
        headers: {
          "authorization ": authToken,
          "content-Type": "application/json",
        },
      }
    );
    console.log(response.status + response.data);
    navigate("/userLogin");
  };
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <h2>User Registration</h2>
      <form onSubmit={handleRegistration}>
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
          type="text"
          placeholder="Upper case, lower case and numbers"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <input type="submit" />
    </form></div>
  );
};

export default UserRegistration;
