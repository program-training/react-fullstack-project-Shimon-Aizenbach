import React, { useState, useEffect } from "react";
import TripDetail from "../TripDetail/TripDetail";
import "./TripCard.css";

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
    </div>
  );
};

export default TripCard;
