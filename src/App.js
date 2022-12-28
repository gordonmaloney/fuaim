import React from "react";
import Search from "./Search";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Player } from "./Word/Player";
import { Header } from "./Header";
import Waveform from "./Word/Waveform";
import { Footer } from "./Footer";
const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Search />} />
            <Route path="/word/:word" element={<Player />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
};

export default App;
