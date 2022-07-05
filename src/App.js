import React from "react";
import "./App.css";
import Country from "./country";

import { Route, BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div
        className="fontBody"
        style={{
          backgroundColor: "#ebebe0",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route exact path="/Add" element={<Country />}></Route>
            <Route exact path="/" element={<Country />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
