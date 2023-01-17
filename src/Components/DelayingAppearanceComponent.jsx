import React, { useState, useEffect } from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
//

import NeutralTable from "./TablesComponents/NeutralTable";
import PositiveTable from "./TablesComponents/PostitveTable";
import OverallTable from "./TablesComponents/OverallTable";
import NegativeTable from "./TablesComponents/NegativeTable";

import ContainedButtons from "./ButtonComponent";
import CircularStatic from "./CircularSpinner";

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

export default function DelayingAppearance() {
  const [loading, setLoading] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const [query, setQuery] = React.useState("idle");
  const timerRef = React.useRef();

  React.useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    []
  );

  const handleClickLoading = () => {
    setLoading((prevLoading) => !prevLoading);
  };

  const handleClickQuery = () => {
    setVisible((prev) => !prev);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (query !== "idle") {
      setQuery("idle");
      return;
    }

    setQuery("progress");
    timerRef.current = window.setTimeout(() => {
      setQuery("success");
    }, 4000);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <Box sx={{ height: 40 }}>
        {query === "success" ? (
          <div style={{ backgroundColor: "whitesmoke" }}>
            <OverallTable />
            <NegativeTable />
            <NeutralTable />
            <PositiveTable />
          </div>
        ) : (
          <Fade
            in={query === "progress"}
            style={{
              transitionDelay: query === "progress" ? "400ms" : "0ms",
            }}
            unmountOnExit
          >
            <CircularProgress style={{ margin: "200px auto" }} />
          </Fade>
        )}
      </Box>
      {visible && (
        <>
          <p>Файл успешно загружен</p>
          <Button onClick={handleClickQuery} sx={{ m: 2 }}>
            {query !== "idle" ? null : "Сформировать отчёт"}
          </Button>
        </>
      )}
    </Box>
  );
}
