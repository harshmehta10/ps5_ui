import React from "react";
import fortnite from "../assets/games/fortnite.jpeg";
import rdr2 from "../assets/games/rdr2.jpeg";
import skyrim from "../assets/games/skyrim.webp";
import spiderman from "../assets/games/spiderman.jpeg";
import tekken from "../assets/games/tekken.jpeg";
import uncharted from "../assets/games/uncharted.jpeg";
import witcher from "../assets/games/witcher3.jpeg";

const GameList = () => {
  const games = [
    {
      name: "fortnite",
      src: fortnite,
    },
    {
      name: "rdr2",
      src: rdr2,
    },
    {
      name: "skyrim",
      src: skyrim,
    },
    {
      name: "spiderman",
      src: spiderman,
    },
    {
      name: "tekken",
      src: tekken,
    },
    {
      name: "uncharted",
      src: uncharted,
    },
    {
      name: "witcher",
      src: witcher,
    },
  ];

  return (
    <div>
      {
        <div className="flex px-6">
          {games.map((game) => (
            <div>
              <img
                src={game.src}
                alt={game.name}
                className="w-32 h-32 object-cover rounded-2xl"
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
