import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { WORDS } from "./WORDS";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BtnStyle } from "./BtnStyle";
import { useStyles } from "@mui/material";
import { Paper, Popper } from "@mui/material";

const theme = createTheme({
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          borderRadius: "10px 5px 10px 5px !important",
        },
      },
    },
  },
});

export const SearchBox = () => {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Autocomplete
          disablePortal
          id="autocomplete-box"
          options={WORDS.map((word) => word.word)}
          sx={{ width: "100%",             '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '1px #453222 solid !important'
          },   "&.Mui-focused .MuiInputLabel-outlined": {
            color: "#453222"
          } }}
          renderInput={(params) => <TextField {...params} label={<span style={{color: 'red !important'}}>Search...</span>} />}
          onChange={(event, newValue) => {
            setWord(newValue);
          }}
        />
      </ThemeProvider>
      <br />

      <center>
        <Button
          sx={BtnStyle}
          disabled={!word}
          onClick={() => navigate(`/word/${word}`)}
          variant="contained"
        >
          Go
        </Button>
      </center>
    </>
  );
};
