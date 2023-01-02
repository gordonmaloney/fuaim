import React from "react";
import { Button, Grid } from "@mui/material";
import { BtnStyle } from "./BtnStyle";
export const Footer = () => {
  return (
    <div className="footer">
      <center>
        <Button
          variant="contained"
          href="https://ko-fi.com/gordonmaloney"
          target="_blank"
          sx={{...BtnStyle}}
        >
          Support Fuaim
        </Button>
      </center>
    </div>
  );
};
