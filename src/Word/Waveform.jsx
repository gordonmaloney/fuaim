import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import WaveSurfer from "wavesurfer.js";
import styled from "styled-components";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { Button } from "@mui/material";

const Waveform = ({ audio }) => {
  const containerRef = useRef();
  const waveSurferRef = useRef({
    isPlaying: () => false,
  });
  const [isPlaying, toggleIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      responsive: true,
      barWidth: 1,
      barMinHeight: 1,
      barHeight: 4,
      cursorWidth: 1,
      height: 50,
    });
    waveSurfer.load(audio);
    waveSurfer.on("ready", () => {
      waveSurferRef.current = waveSurfer;
    });

    waveSurfer.setPlaybackRate(speed);

    waveSurfer.on("finish", () => {
      toggleIsPlaying(false);
      waveSurfer.seekTo(0);
    });

    return () => {
      waveSurfer.destroy();
    };
  }, [audio, speed]);

  return (
    <>
      <div className="waveOuter">
        <WaveSurferWrap>
          <div ref={containerRef} />
        </WaveSurferWrap>
      </div>
      <center>
        <Button
          sx={{ marginTop: "5px" }}
          size="small"
          variant="contained"
          onClick={() => {
            waveSurferRef.current.playPause();
            toggleIsPlaying(waveSurferRef.current.isPlaying());
          }}
        >
          {!isPlaying ? "Play" : "Stop"}
        </Button>
      </center>

      {/*
<Button onClick={() => speed == 1 ? setSpeed(0.8) : setSpeed(1)}>
    {speed == 1 ? 'Slow' : 'Normal speed'}
</Button>
    */}
    </>
  );
};

Waveform.propTypes = {
  audio: PropTypes.string.isRequired,
};

const WaveSurferWrap = styled.div`
  width: 100%;
`;

export default Waveform;
