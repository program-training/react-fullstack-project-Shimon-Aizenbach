import { Link } from "react-router-dom";
import React from 'react';

const UserRegistration: React.FC = () => {
  return (
    <div>
      <h2>User Registration</h2>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default UserRegistration;