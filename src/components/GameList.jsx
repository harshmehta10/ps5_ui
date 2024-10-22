import React, { useState } from "react";
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

const GameList = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const handleClick = (bgimg, gameName) => {
    setSelectedGame(gameName);
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
      style={{
        backgroundImage: `url(${
          games.find((game) => game.name === selectedGame)?.bgimg || fortnite_bg
        })`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex px-6 items-center space-x-7 pt-40 overflow-hidden">
        {games.map((game) => (
          <div
            key={game.name}
            className={`transition-all duration-500 ease-in-out ${
              selectedGame === game.name
                ? "transform scale-10"
                : "transform scale-10"
            }`}
            style={{
              transform:
                selectedGame && selectedGame !== game.name
                  ? "translateX(-50px)"
                  : "translateX(0)",
              transition: "transform 0.5s ease-in-out",
            }}
          >
            <img
              src={game.src}
              alt={game.name}
              className="w-32 h-32 object-cover rounded-2xl cursor-pointer"
              onClick={() => handleClick(game.bgimg, game.name)}
            />
            <p className="text-white mt-2">{game.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;
