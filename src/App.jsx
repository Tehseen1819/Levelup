import React from "react";
import Routing from "./Utils/Routing"
import Nav from "./Components/Nav";

const App = () => {
  return (
    <>
      <div className="w-full h-screen">
      <Nav/>
      <Routing/>
      </div>
    </>
  );
};

export default App;
