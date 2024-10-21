import { useState } from "react";

import Profile from "./profile/Profile";
import Body from "./Body";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Body />
    </>
  );
}

export default App;
