import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, FormEvent, useEffect } from "react";
import axios from "axios";
import "./UpdateTripForm.css";
const authToken = localStorage.getItem("token");

const baseURL = "http://localhost:3000/api/trips";

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

const UpdateTripForm: React.FC = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState<Trip | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getTrip = async () => {
      const tripDetails = await axios(`${baseURL}/${id}`);
      console.log(tripDetails.data);
      tripDetails && setTrip(tripDetails.data);
    };
    getTrip();
  }, []);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.put(`${baseURL}/${id}`, trip, {
        headers: {
          "authorization ": authToken,
          "content-Type": "application/json",
        },
      });
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
      <h2>Update Trip Form</h2>
      <form onSubmit={handleSubmit}>
        <label className="input-label">
          Enter trip id
          <input
            type="number"
            value={trip?.id}
            onChange={(event) =>
              setTrip((prev) => prev && { ...prev, id: event.target.value })
            }
          />
        </label>
        <label className="input-label">
          Enter trip name
          <input
            type="text"
            value={trip?.name}
            onChange={(event) =>
              setTrip((prev) => prev && { ...prev, name: event.target.value })
            }
          />
        </label>
        <label className="input-label">
          Enter trip destination
          <input
            type="text"
            value={trip?.destination}
            onChange={(event) =>
              setTrip(
                (prev) => prev && { ...prev, destination: event.target.value }
              )
            }
          />
        </label>
        <label className="input-label">
          Enter trip start date
          <input
            type="date"
            value={trip?.startDate}
            onChange={(event) =>
              setTrip(
                (prev) => prev && { ...prev, startDate: event.target.value }
              )
            }
          />
        </label>
        <label className="input-label">
          Enter trip end date
          <input
            type="date"
            value={trip?.endDate}
            onChange={(event) =>
              setTrip(
                (prev) => prev && { ...prev, endDate: event.target.value }
              )
            }
          />
        </label>
        <label className="input-label">
          Enter trip description
          <input
            type="text"
            value={trip?.description}
            onChange={(event) =>
              setTrip(
                (prev) => prev && { ...prev, description: event.target.value }
              )
            }
          />
        </label>
        <label className="input-label">
          Enter trip price
          <input
            type="number"
            value={trip?.price}
            onChange={(event) =>
              setTrip(
                (prev) => prev && { ...prev, price: Number(event.target.value) }
              )
            }
          />
        </label>
        <label className="input-label">
          Enter trip image URL
          <input
            type="text"
            value={trip?.image}
            onChange={(event) =>
              setTrip((prev) => prev && { ...prev, image: event.target.value })
            }
          />
        </label>
        <label className="input-label">
          Enter trip activities with , between activities
          <input
            type="text"
            value={trip?.activities}
            onChange={(event) =>
              setTrip(
                (prev) =>
                  prev && { ...prev, activities: event.target.value.split(",") }
              )
            }
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default UpdateTripForm;
