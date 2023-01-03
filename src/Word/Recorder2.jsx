import React, { useState } from "react";
import MicRecorder from "mic-recorder-to-mp3";
import { BtnStyle } from "../BtnStyle";
import { useEffect } from "react";
import Waveform from "./Waveform";
import { Button } from "@mui/material";
const Mp3Recorder = new MicRecorder({ bitRate: 128 });

export const Recorder = () => {
  const [state, setState] = useState({
    isRecording: false,
    blobURL: "",
    isBlocked: false,
  });

  const start = () => {
    if (state.isBlocked) {
      console.log("Permission Denied");
    } else {
      Mp3Recorder.start()
        .then(() => {
          setState({ isRecording: true });
        })
        .catch((e) => console.error(e));
    }
  };

  const stop = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        setState({ blobURL, isRecording: false });
      })
      .catch((e) => console.log(e));
  };

  console.log(navigator)
  useEffect(() => {
    navigator.mediaDevices.getUserMedia(
      { audio: true },
      () => {
        console.log("Permission Granted");
        setState({ isBlocked: false });
      },
      () => {
        console.log("Permission Denied");
        setState({ isBlocked: true });
      }
    );
  }, []);

  return (
    <>
      <h3>Record your own version:</h3>
      <center>
        {state.isRecording ? (
          <Button
            variant="contained"
            onClick={() => stop()}
            disabled={!state.isRecording}
          >
            Stop
          </Button>
        ) : 
        !state.blobURL ? (
          <Button
            variant="contained"
            onClick={() => start()}
            disabled={state.isRecording || state.isBlocked}
            sx={{...BtnStyle}}

          >
            Record
          </Button>
          
        )
      :
      (
        <Button
          variant="contained"
          size="small"
          onClick={() => start()}
          disabled={state.isRecording}
          sx={{...BtnStyle}}

        >
          Re-record
        </Button>
      )
      }
            {state.isBlocked && <><br/>You must <a href="https://www.google.com/search?q=how+to+enable+access+to+microphone+from+browser&rlz=1C5CHFA_enGB1004GB1004&oq=how+to+enable+access+to+microphone+from+browser&aqs=chrome..69i64j0i22i30l2j0i390l2j69i57.1950j0j4&sourceid=chrome&ie=UTF-8" target="_blank">enable access to your microphone</a> in order to record your own version.</>}

      </center>

      <br />
      {state.blobURL && <Waveform audio={state.blobURL} />}
    </>
  );
};
