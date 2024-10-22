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
  const games = [
    { name: "fortnite", src: fortnite, bgimg: fortnite_bg },
    { name: "rdr2", src: rdr2, bgimg: rdr2_bg },
    { name: "skyrim", src: skyrim, bgimg: skyrim_bg },
    { name: "spiderman", src: spiderman, bgimg: spiderman_bg },
    { name: "tekken", src: tekken, bgimg: tekken_bg },
    { name: "uncharted", src: uncharted, bgimg: uncharted_bg },
    { name: "witcher", src: witcher, bgimg: witcher_bg },
  ];

  // Default selected game is the first one (fortnite)
  const [selectedGame, setSelectedGame] = useState(games[0].name);

  const handleClick = (gameName) => {
    setSelectedGame(gameName);
  };

  return (
    <div className="h-screen w-screen relative">
      {/* Background image container */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            games.find((game) => game.name === selectedGame)?.bgimg ||
            games[0].bgimg
          })`,
          transition: "background 0.3s ease-in-out",
        }}
      >
        {/* Adding opacity overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center space-x-10 pt-40 transition-all duration-300 ease-in-out">
        {games.map((game) => (
          <div
            key={game.name}
            className={`transition-all duration-300 ease-in-out cursor-pointer ${
              selectedGame === game.name
                ? "transform scale-150 z-20" // Enlarges the selected game
                : "transform scale-100 " // Shrinks others
            }`}
            onClick={() => handleClick(game.name)}
          >
            <img
              src={game.src}
              alt={game.name}
              className="w-32 h-32 object-cover rounded-2xl"
            />
            <p className="text-white mt-2 text-center">{game.name}</p>
          </div>
        ))}
      </div>

      {/* Game Title and Play Button */}
      {selectedGame && (
        <div className="absolute bottom-10 left-0 right-0 text-center z-10">
          <h2 className="text-5xl text-white font-bold mb-4">
            {games.find((game) => game.name === selectedGame)?.name}
          </h2>
          <button className="px-6 py-3 bg-gray-900 text-white text-lg rounded-lg">
            Play
          </button>
        </div>
      )}
    </div>
  );
};

export default GameList;
