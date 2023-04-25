import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TopCards from "./components/TopCards";
import Food from "./components/Food";
import Category from "./components/Category";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TopCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
