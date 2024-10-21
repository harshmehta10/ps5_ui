import React, { useState, useEffect, useMemo, useCallback } from "react";
import Avatar from "../assets/Avatar.png";
import { TbSearch } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";

const Header = () => {
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
    <div className="flex items-center justify-between px-8 ">
      <div className="flex items-center space-x-4 cursor-pointer">
        <div>Games</div>
        <div>Media</div>
      </div>
      <div className="flex items-center space-x-7 cursor-pointer">
        <div className="text-xl">
          <TbSearch />
        </div>
        <div className="text-xl">
          <IoSettingsSharp />
        </div>
        <div>
          <img src={Avatar} alt="avatar" />
        </div>
        <div>{timeString}</div>
      </div>
    </div>
  );
};

export default Header;
