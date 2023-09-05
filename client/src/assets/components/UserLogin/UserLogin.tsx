import { Link } from "react-router-dom";
import React from 'react';

const UserLogin: React.FC = () => {
  return (
    <div>
      <h2>User Login</h2>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default UserLogin;
