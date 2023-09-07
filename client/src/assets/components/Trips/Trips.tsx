import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import TripCard from "../TripCard/TripCard";
import axios from "axios";

interface Trip {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  image: string;
}

const Trips: React.FC = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  useEffect(() => {
    const getTrips = async () => {
      const tripsFetch = await axios("http://localhost:3000/api/trips");
      console.log(tripsFetch.data);  
      tripsFetch && setTrips((prev) => (prev = tripsFetch.data));
    };
    getTrips();
  }, []);
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/newTripForm">
        <button>New Trip Form</button>
      </Link>
      <div>
        {trips.map((trip) => (
          <TripCard key={trip.id} {...trip} />
        ))}
      </div>
    </div>
  );
};

export default Trips;
