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
    { name: "Fortnite", src: fortnite, bgimg: fortnite_bg },
    { name: "rdr2", src: rdr2, bgimg: rdr2_bg },
    { name: "Skyrim", src: skyrim, bgimg: skyrim_bg },
    { name: "Spiderman", src: spiderman, bgimg: spiderman_bg },
    { name: "Tekken", src: tekken, bgimg: tekken_bg },
    { name: "Uncharted", src: uncharted, bgimg: uncharted_bg },
    { name: "Witcher 3", src: witcher, bgimg: witcher_bg },
  ];

  // Default selected game is the first one (fortnite)
  const [selectedGame, setSelectedGame] = useState(games[0].name);

  const handleClick = (gameName) => {
    setSelectedGame(gameName);
  };

  return (
    <div className="min-h-screen min-w-screen max-h-screen max-w-screen w-full h-full relative">
      {/* Background image container */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:object-cover md:object-cover"
        style={{
          backgroundImage: `url(${
            games.find((game) => game.name === selectedGame)?.bgimg ||
            games[0].bgimg
          })`,
          transition: "background 0.4s ease-in-out",
        }}
      >
        {/* Adding opacity overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-10 pt-20 md:pt-40 transition-all duration-300 ease-in-out">
        {games.map((game) => (
          <div
            key={game.name}
            className={`transition-all duration-300 ease-in-out cursor-pointer ${
              selectedGame === game.name
                ? "transform scale-110 md:scale-125 lg:scale-150 z-20" // Enlarges the selected game
                : "transform scale-75 sm:scale-90 md:scale-100 opacity-60" // Shrinks others
            }`}
            onClick={() => handleClick(game.name)}
          >
            <img
              src={game.src}
              alt={game.name}
              className="w-12 h-12 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-cover sm:object-cover md:object-cover rounded-2xl"
            />
            <p className="text-white mt-2 text-xs sm:text-sm md:text-base lg:text-lg text-center">
              {game.name}
            </p>
          </div>
        ))}
      </div>

      {/* Game Title and Play Button */}
      {selectedGame && (
        <div className="absolute bottom-5 sm:bottom-10 left-0 right-0 mx-5 sm:mx-10 z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl text-white font-bold mb-2 sm:mb-4">
            {games.find((game) => game.name === selectedGame)?.name}
          </h2>
          <button className="px-8 py-2  bg-gray-500  shadow-xl shadow-black text-white text-sm sm:text-lg rounded-lg">
            Play
          </button>
        </div>
      )}
    </div>
  );
};

export default GameList;
