// import React, { useState } from "react";

// import "./App.css";

// function App() {
//   const [name, setName] = useState("Varun");
//   const [flag, setFlag] = useState(false);
//   const [steps, setSteps] = useState(0);
//   const [names, setNames] = useState([]);

//   const changeName = () => {
//     console.log("Clicked");
//     // return setName("Nithya");
//     return setFlag(!flag);
//   };

//   const increment = () => {
//     console.log("increased");
//     return setSteps(steps + 1);
//   };

//   const decrement = () => {
//     console.log("decreased");
//     return setSteps(steps - 1);
//   };

//   const addNames = (e) => {
//     e.preventDefault();
//     setNames([...names, { id: names.length, name }]);
//     setName("");
//   };

//   return (
//     <div className="App">
//       <div>Hello {flag ? name : ""}</div>
//       <button onClick={changeName}>Click me</button>
//       <hr></hr>
//       <div>{steps}</div>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//       <hr></hr>
//       <form onSubmit={addNames}>
//         <input
//           type="text"
//           placeholder="add Names"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br />
//         <button>Add</button>
//       </form>
//       <hr></hr>
//       <ul>
//         {names.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import "./App.css";

// const App = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [name, setName] = useState("");

//   // On every Render
//   useEffect(() => {
//     console.log("I re-rendered");
//   });

//   // On first Render/Mount Only
//   useEffect(() => {
//     console.log(" The component mounted");
//   });

//   // On first render+ whenever dependency changes

//   useEffect(() => {
//     console.log(`The name changed:${name}`);
//   }, [name]);

//   // component will unmount
//   useEffect(() => {
//     window.addEventListener("resize", setWindowWidth);
//   });

//   return (
//     <div className="app">
//       <center>
//         <h1>USE EFFECT</h1>
//         <h2>The Window Width is : {windowWidth}</h2>
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter a Name"
//         />
//       </center>
//     </div>
//   );
// };

// export default App;

import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [flag, setFlag] = useState(true);
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const inputElement = useRef("");
  const previousCountRef = useRef("");

  console.log(inputElement);

  useEffect(() => {
    previousCountRef.current = count;
  }, [count]);

  const resetInput = () => {
    setName("");
    inputElement.current.focus();
    console.log(inputElement.current.value);
    inputElement.current.value = "priya";
  };

  return (
    <div className="App">
      <div>
        <button onClick={() => setFlag(!flag)}>Toggle class component </button>
        <input
          ref={inputElement}
          name="name"
          autoComplete="off"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button onClick={resetInput}>Reset</button>
      </div>
      <div>My name is {name}</div>
      <div>
        <h1>Random Counter:{count}</h1>
        {typeof previousCountRef.current !== "undefined" && (
          <h2>Previous Count : {previousCountRef.current}</h2>
        )}
        <button onClick={(e) => setCount(Math.ceil(Math.random() * 100))}>
          Generate Number
        </button>
      </div>
    </div>
  );
}

export default App;
