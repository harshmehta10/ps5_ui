import React, { useState, useEffect, useMemo, useCallback } from "react";
import fortnite from "../assets/games/fortnite.jpeg";
import rdr2 from "../assets/games/rdr2.jpeg";
import skyrim from "../assets/games/skyrim.webp";
import spiderman from "../assets/games/spiderman.jpeg";
import tekken from "../assets/games/tekken.jpeg";
import uncharted from "../assets/games/uncharted.jpeg";
import witcher from "../assets/games/witcher3.jpeg";
import fortnite_bg from "../assets/games/fortnite_bg.jpeg";
import rdr2_bg from "../assets/games/rdr2_bg.jpeg";
import skyrim_bg from "../assets/games/skyrim_bg.jpeg";
import spiderman_bg from "../assets/games/spiderman_bg.webp";
import tekken_bg from "../assets/games/tekken_bg.jpeg";
import uncharted_bg from "../assets/games/uncharted_bg.jpeg";
import witcher_bg from "../assets/games/witcher3_bg.webp";
import Avatar from "../assets/Avatar.png";
import { TbSearch } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";

const GameList = () => {
  const [bgimg, setBgimg] = useState(fortnite_bg);
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
  const handleClick = (bg) => {
    setBgimg(bg);
  };
  const games = [
    {
      name: "fortnite",
      src: fortnite,
      bgimg: fortnite_bg,
    },
    {
      name: "rdr2",
      src: rdr2,
      bgimg: rdr2_bg,
    },
    {
      name: "skyrim",
      src: skyrim,
      bgimg: skyrim_bg,
    },
    {
      name: "spiderman",
      src: spiderman,
      bgimg: spiderman_bg,
    },
    {
      name: "tekken",
      src: tekken,
      bgimg: tekken_bg,
    },
    {
      name: "uncharted",
      src: uncharted,
      bgimg: uncharted_bg,
    },
    {
      name: "witcher",
      src: witcher,
      bgimg: witcher_bg,
    },
  ];

  return (
    <div
      className="h-screen w-screen"
      style={{ backgroundImage: `url(${bgimg})`, backgroundSize: "cover" }}
    >
      <div className="flex items-center justify-between px-8 text-white">
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
      {
        <div className="flex px-6 items-center space-x-7 mt-28">
          {games.map((game) => (
            <div>
              <img
                src={game.src}
                alt={game.name}
                className="w-32 h-32 object-cover rounded-2xl cursor-pointer"
                onClick={() => handleClick(game.bgimg)}
              />
              <p className="text-white mt-2">{game.name}</p>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default GameList;
