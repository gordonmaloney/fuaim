import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { WORDS } from "./WORDS";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const SearchBox = () => {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={WORDS}
        sx={{ width: "100%"}}
        renderInput={(params) => <TextField {...params} label="Search..." />}
        onChange={(event, newValue) => {
          setWord(newValue);
        }}
      />
      <br />

      <center>
        <Button 
        disabled={!word}
        onClick={() => navigate(`/word/${word}`)} variant="contained">
          Go
        </Button>
      </center>
    </>
  );
};
