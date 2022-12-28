import React from "react";
import { Link, useParams } from "react-router-dom";
import { Recorder } from "./Recorder2";
import Waveform from "./Waveform";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Player = () => {
  const navigate = useNavigate();

  const params = useParams();

  const word = params.word;

  try {
    let src = require(`./Audio/${word}.mp3`);

    return (
      <>
        <center>
          <h2 style={{margin: "0 0 15px 0"}}>{word}</h2>
        </center>
        <Waveform audio={src} />

        <br />
        <Recorder />

        <br />
        <Button
          onClick={() => navigate("../")}
          variant="contained"
          size="small"
        >
          Back
        </Button>
      </>
    );
  } catch {
    return (
      <>
        <center>
          <h2>{word}</h2>
        </center>
        <em>No audio file for this word yet</em>
      </>
    );
  }
};
