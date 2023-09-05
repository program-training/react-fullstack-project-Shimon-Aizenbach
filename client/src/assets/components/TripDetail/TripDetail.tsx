import React, { useState, useEffect } from "react";
import axios from "axios";

interface Props {
  id: string;
}

interface TripDetails {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  image: string;
  price: number;
  activities: string[];
}

const TripDetail: React.FC<Props> = (props) => {
  const [tripDetails, setTripDetails] = useState<TripDetails | null>(null);
  useEffect(() => {
    const getDetail = async () => {
      const details = await axios(
        `http://localhost:3000/api/trips/${props.id}`
      );
      details && setTripDetails(details.data);
    };
    getDetail();
  }, []);
  return (
    <div>
      <p>{`Price: ${tripDetails?.price}`}</p>
      <h4>Activities:</h4>
      <ul>
        {tripDetails?.activities.map((activity) => (
          <li>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default TripDetail;
