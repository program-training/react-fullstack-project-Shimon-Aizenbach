import React, { useState } from "react";
import TripDetail from "../TripDetail/TripDetail";
import "./TripCard.css";
import axios from "axios";
import { Link } from "react-router-dom";
const authToken = localStorage.getItem("token")

interface Props {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  image: string;
}

const TripCard: React.FC<Props> = (props) => {
  const { id, name, destination, startDate, endDate, image } = props;
  const [detail, setDetail] = useState<boolean>(false);
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/trips/${id}`, {
        headers: { "authorization ": authToken },
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="trip-card">
      <h2>{name}</h2>
      <p>{destination}</p>
      <img src={image} alt="Trip Image" className="trip-image" />
      <p>{`Start Date: ${startDate}`}</p>
      <p>{`End Date: ${endDate}`}</p>
      {detail && <TripDetail id={id} />}
      <button onClick={() => setDetail((prev) => !prev)}>
        {detail ? `Less details` : `More details`}
      </button>
      <div>
        <Link to={`/updateTripForm/${id}`}>
          <button>Update trip</button>
        </Link>
        <button onClick={handleDelete}>Delete trip</button>
      </div>
    </div>
  );
};

export default TripCard;
