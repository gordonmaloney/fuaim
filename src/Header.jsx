import React from "react";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxWidth: '90%',
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: '15px',
};

export const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="header">
      <div style={{ float: "left" }}>
        <a href="../" style={{textDecoration: "none", color: 'inherit', margin: "0", padding: "0"}}>
        <h1>Fuaim</h1>
        </a>
      </div>
      <div style={{ float: "right" }}>
        <Button onClick={handleOpen}>What???</Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <b>What is this all about?</b>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Fuaim is a (very) simply wee program to improve your Gaelic
            pronunciation.
            <br />
            <br />
            It allows you to listen to a word pronounced, and then record your
            own version to compare the two.
            <br />
            <br />
            All vocabulary is taken from the Duolingo course, and all sound
            files are taken from the fantastic{" "}
            <a href="https://learngaelic.net/dictionary/" target="_blank">
              Learn Gaelic dictionary
            </a>
            . The IPA is pulled from Wiktionary - blame them if it's wrong!
            <br />
            <br />
            Made by the same volunteer as{" "}
            <a href="https://facle.netlify.app/" target="_blank">
              Facle
            </a>
            ,{" "}
            <a href="https://cuimhne.gordonmaloney.info/" target="_blank">
              Cuimhne
            </a>
            , and{" "}
            <a href="https://cairtean.gordonmaloney.info/" target="_blank">
              Cairtean
            </a>
            , you can support this and future Gaelic learning programs
            by making a donation here:
            <br /><br />
            <center>
              <Button
                variant="contained"
                size="small"
                href="https://ko-fi.com/gordonmaloney"
                target="_blank"
              >
                Support Fuaim
              </Button>
            </center>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
