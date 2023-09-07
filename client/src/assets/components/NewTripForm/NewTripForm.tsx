import { Link, useNavigate } from "react-router-dom";
import React, { useState, FormEvent } from "react";
import axios from "axios";
import "./NewTripForm.css";
const authToken = localStorage.getItem("token");

interface Trip {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string;
  price: number;
  activities: string[];
}

const NewTripForm: React.FC = () => {
  const [trip, setTrip] = useState<Trip>({
    id: ``,
    name: ``,
    destination: ``,
    startDate: ``,
    endDate: ``,
    description: ``,
    image: ``,
    price: 0,
    activities: [],
  });
  const navigate = useNavigate();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/trips",
        trip,
        {
          headers: {
            "authorization ": authToken,
            "content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      navigate("/trips");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Link to="/trips">
        <button>Trips</button>
      </Link>
      <h2>New Trip Form</h2>
      <form onSubmit={handleSubmit}>
        <label className="input-label">
          Enter trip id
          <input
            type="number"
            value={trip.id}
            onChange={(event) => setTrip({ ...trip, id: event.target.value })}
          />
        </label>
        <label className="input-label">
          Enter trip name
          <input
            type="text"
            value={trip.name}
            onChange={(event) => setTrip({ ...trip, name: event.target.value })}
          />
        </label>
        <label className="input-label">
          Enter trip destination
          <input
            type="text"
            value={trip.destination}
            onChange={(event) =>
              setTrip({ ...trip, destination: event.target.value })
            }
          />
        </label>
        <label className="input-label">
          Enter trip start date
          <input
            type="date"
            value={trip.startDate}
            onChange={(event) =>
              setTrip({ ...trip, startDate: event.target.value })
            }
          />
        </label>
        <label className="input-label">
          Enter trip end date
          <input
            type="date"
            value={trip.endDate}
            onChange={(event) =>
              setTrip({ ...trip, endDate: event.target.value })
            }
          />
        </label>
        <label className="input-label">
          Enter trip description
          <input
            type="text"
            value={trip.description}
            onChange={(event) =>
              setTrip({ ...trip, description: event.target.value })
            }
          />
        </label>
        <label className="input-label">
          Enter trip price
          <input
            type="number"
            value={trip.price}
            onChange={(event) =>
              setTrip({ ...trip, price: Number(event.target.value) })
            }
          />
        </label>
        <label className="input-label">
          Enter trip image URL
          <input
            type="text"
            value={trip.image}
            onChange={(event) =>
              setTrip({ ...trip, image: event.target.value })
            }
          />
        </label>
        <label className="input-label">
          Enter trip activities with , between activities
          <input
            type="text"
            value={trip.activities}
            onChange={(event) =>
              setTrip({ ...trip, activities: event.target.value.split(",") })
            }
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewTripForm;
