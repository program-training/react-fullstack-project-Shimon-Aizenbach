import { Link } from "react-router-dom";
import React from 'react';

const NewTripForm: React.FC = () => {
  return (
    <div>
      <h2>New Trip Form</h2>
      <Link to="/trips">
        <button>Trips</button>
      </Link>
    </div>
  );
};

export default NewTripForm;
