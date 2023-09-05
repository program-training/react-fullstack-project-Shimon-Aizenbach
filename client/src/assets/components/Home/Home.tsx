import { Outlet, Link } from "react-router-dom";
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/trips"><button>Trips</button></Link>
      <Link to="/userRegistration"><button>User Registration</button></Link>
      <Link to="/userLogin"><button>User Login</button></Link>
      <Outlet/>
    </div>
  );
};

export default Home;
