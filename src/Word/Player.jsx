import React from "react";
import { Link, useParams } from "react-router-dom";
import { Recorder } from "./Recorder2";
import Waveform from "./Waveform";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { WORDS } from "../WORDS";

import { BtnStyle } from "../BtnStyle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxWidth: "90%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};

export const Player = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const params = useParams();

  const word = params.word;

  try {
    let src = require(`./Audio/${word}.mp3`);

    return (
      <>
        <center style={{ margin: "0 0 10px 0" }}>
          <h2 style={{ margin: "0 0 5px 0" }}>{word}</h2>
          <p style={{ margin: 0, fontSize: 14 }}>
            <a
              href="https://en.wiktionary.org/wiki/Appendix:Scottish_Gaelic_pronunciation"
              target="_blank"
            >
              IPA
            </a>
            : {WORDS.filter((filterWord) => filterWord.word == word)[0].ipa}
          </p>
        </center>

        <Waveform audio={src} />

        <center>
          <Button
            onClick={() => setOpen(true)}
            variant="contained"
            size="small"
            sx={{
              padding: "1px 4px",
              margin: "5px 0 0 0",
              fontSize: 10,
              ...BtnStyle,
            }}
          >
            Something odd?
          </Button>
        </center>
        <Recorder />

        <br />
        <Button
          onClick={() => navigate("../")}
          variant="contained"
          size="small"
          sx={{ ...BtnStyle }}
        >
          Try another word
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Something odd?
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Audio files are automatically pulled from the fantastic{" "}
              <a href="https://learngaelic.net/dictionary/" target="_blank">
                Learn Gaelic dictionary
              </a>
              , but sometimes the words are only on there in phrases, not just
              on their own.
              <br />
              <br />
              If you spot one that sounds odd, you can{" "}
              <a
                href="mailto:gordonmalomney@gmail.com?subject=Fuaim - something odd"
                target="_blank"
              >
                let me know
              </a>
              , but as a volunteer with a busy life, I'm afraid I can't promise
              to fix everything as quickly as I'd like. Duilich!
            </Typography>
          </Box>
        </Modal>
      </>
    );
  } catch {
    return (
      <>
        <center style={{ margin: "0 0 10px 0" }}>
          <h2 style={{ margin: "0 0 5px 0" }}>{word}</h2>
          <p style={{ margin: 0, fontSize: 14 }}>
            <a
              href="https://en.wiktionary.org/wiki/Appendix:Scottish_Gaelic_pronunciation"
              target="_blank"
            >
              IPA
            </a>
            : {WORDS.filter((filterWord) => filterWord.word == word)[0].ipa}
          </p>
        </center>
        <em>No audio file for this word yet</em>
        <Recorder />

        <br />
        <br />
        <Button
          onClick={() => navigate("../")}
          variant="contained"
          size="small"
          sx={{ ...BtnStyle }}
        >
          Try another word
        </Button>
      </>
    );
  }
};
