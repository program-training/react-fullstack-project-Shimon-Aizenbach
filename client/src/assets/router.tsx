import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Trips from "./components/Trips/Trips";
import NewTripForm from "./components/NewTripForm/NewTripForm";
import UpdateTripForm from "./components/UpdateTripForm/UpdateTripForm";
import UserRegistration from "./components/UserRegistration/UserRegistration";
import UserLogin from "./components/UserLogin/UserLogin";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/newTripForm" element={<NewTripForm />} />
          <Route path="/updateTripForm" element={<UpdateTripForm />} />
          <Route path="/userRegistration" element={<UserRegistration />} />
          <Route path="/userLogin" element={<UserLogin />} />
      </Routes>
    </BrowserRouter>
  );
}
