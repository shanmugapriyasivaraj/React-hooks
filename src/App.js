import React, { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("Varun");

  const changeName = () => {
    console.log("Clicked");
    return setName("Nithya");
  };

  return (
    <div className="App">
      <div>Hello {name}</div>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default App;
