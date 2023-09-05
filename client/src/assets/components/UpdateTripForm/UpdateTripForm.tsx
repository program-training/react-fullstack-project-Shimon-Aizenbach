import { Link } from "react-router-dom";
import React from 'react';

const UpdateTripForm: React.FC = () => {
  return (
    <div>
      <h2>Update Trip Form</h2>
      <Link to="/trips">
        <button>Trips</button>
      </Link>
    </div>
  );
};

export default UpdateTripForm;
