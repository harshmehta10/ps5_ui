import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./profile/Profile";
import Login from "./components/Login"; // The login component
import GameList from "./components/GameList"; // The games UI component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/games" element={<GameList />} />
      </Routes>
    </Router>
  );
}

export default App;
