import React, { useState, useEffect, useMemo, useCallback } from "react";
import Ellipse2 from "../assets/Ellipse 24.png";
import { Link } from "react-router-dom";
import { BsController } from "react-icons/bs";

const Profile = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const tick = useCallback(() => {
    setDate(new Date());
  }, []);

  const options = { hour: "2-digit", minute: "2-digit", hour12: true };
  const timeString = useMemo(
    () => date.toLocaleTimeString("en-GB", options),
    [date]
  );

  return (
    <div className="bg-black text-white h-screen w-screen flex-col justify-center">
      <div>
        <h2 className="text-right px-6 py-2"> {timeString}</h2>
      </div>
      <div className="text-center text-4xl font-light my-5">
        <h1>Welcome Back to Playstation</h1>
      </div>
      <div className="text-center text-2xl font-light my-1">
        <p>Who's using this controller?</p>
      </div>
      <div className="flex justify-center my-5 text-4xl">
        <BsController />
      </div>
      <div className="flex items-center justify-center space-x-8">
        <div className="flex flex-col items-center">
          {/* Link to the login page */}
          <Link to="/login">
            <div className="flex flex-col items-center justify-center bg-stone-700 rounded-full w-32 h-32 text-white text-4xl cursor-pointer">
              +
            </div>
          </Link>
          <div className="mt-4 text-lg text-white">Add User</div>
        </div>
        <div className="flex flex-col items-center">
          {/* Link to the games UI */}
          <Link to="/games">
            <div>
              <img
                src={Ellipse2}
                alt="New User"
                className="w-48 h-48 rounded-full object-cover cursor-pointer"
              />
            </div>
          </Link>
          <div className="mt-4 text-lg text-white">New User</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
