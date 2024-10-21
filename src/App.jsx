import { useState } from "react";

import Profile from "./profile/Profile";

import GameList from "./components/GameList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GameList />
    </>
  );
}

export default App;
