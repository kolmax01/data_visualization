import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import CircularIntegration from "./CheckersComponents/CheckerComponent";
import CircularNegativeIntegration from "./CheckersComponents/NegativeCheckerComponent";
import CircularNeutralIntegration from "./CheckersComponents/NeutralCheckerComponent";

export default function MultilineTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
      margin="80px 15%"
    >
      <div style={{ marginBottom: "20px" }}>
        <TextField
          id="standard-multiline-static"
          label="Комменатрий 1"
          multiline
          rows={4}
          defaultValue="После чтения отзывов был уверен, что дилер отвратный, но по факту не так. Сервис быстрый, все вовремя, без задержек"
          variant="standard"
        />
        <CircularIntegration />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <TextField
          id="standard-multiline-static"
          label="Комменатрий 2"
          multiline
          rows={4}
          defaultValue="Не было ни единого случая, когда это дилер мне помог. Всегда есть какие-то вопросы, которые почему-то невозможно решить. Например, мне ни разу не смогли назначить обслуживание в удобное для меня время"
          variant="standard"
        />
        <CircularNegativeIntegration />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <TextField
          id="standard-multiline-static"
          label="Комменатрий 3"
          multiline
          rows={4}
          defaultValue="Не уверен, что сюда стоит приезжать на то, парни, что думаете?"
          variant="standard"
        />
        <CircularNeutralIntegration />
      </div>
    </Box>
  );
}
