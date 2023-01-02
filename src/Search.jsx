import React from "react";
import { SearchBox } from "./SearchBox";
import {WORDS} from "./WORDS";
import { BtnStyle } from "./BtnStyle";
import { Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Search = () => {
const navigate = useNavigate()
  return (
    <div>
      <center>
        <h3 style={{ margin: "0 0 20px 0" }}>
          Search for a word to practice your pronunciation:
        </h3>
      </center>
      <SearchBox />

      <br />
      <br />
      <center>
        <h3 style={{ margin: "0 0 20px 0" }}>Or see a word at random:</h3>
        
        <Button
        onClick={() => navigate(`./word/${WORDS[Math.floor(Math.random() * WORDS.length)].word}`)}
        sx={BtnStyle}>Random Word</Button>
      </center>
    </div>
  );
};

export default Search;
