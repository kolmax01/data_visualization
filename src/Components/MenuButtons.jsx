import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

import "../index.css";

import { NavLink } from "react-router-dom";

export default function MenuButtons() {
  return (
    <>
      <div
        id="bigLettersContainer"
        style={{
          margin: "50px auto",
          display: "inline",
          fontFamily: "Saira:wght@700",
          fontSize: "5em",
          fontWeight: "bold",
          color: "#1565c0",
        }}
      >
        <p id="bigLetters" style={{ textAlign: "center" }}>
          TONE OF VOICE <br />
          TEXT ANALYTICS
        </p>
      </div>
      <Stack spacing={2} direction="row">
        <div
          style={{
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "10px auto",
            gap: "20px",
            marginTop: "100px",
          }}
        >
          <Button variant="contained" component={NavLink} to="singleComment">
            ПРОВЕРИТЬ КОММЕНТАРИЙ
          </Button>
          <Button variant="outlined" component={NavLink} to="dashboard">
            ЗАГРУЗИТЬ ФАЙЛ
          </Button>
        </div>
      </Stack>
    </>
  );
}
