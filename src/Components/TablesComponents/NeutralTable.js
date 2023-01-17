import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableFooter from "@mui/material/TableFooter";
import { cardClasses, Grid } from "@mui/material";
import { Box } from "@mui/system";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.footer}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 14,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, channel, demography, time, percentage) {
  return { name, channel, demography, time, percentage };
}

const rows = [
  createData("PM20221047", "WEB", "30-40 лет", "16:00", "98%"),
  createData("PM20221048", "CHATBOT", "женщины", "16:00", "98%"),
  // createData("PM20221047", "CHATBOT", "60+ лет", "20:00", "92%"),
];

export default function NeutralTable() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      display="inline-flex"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          // alignContent: "flex-start",
          position: "relative",
          // alignSelf: "200px",
          left: "-400px",
          margin: 2,
          textAlign: "left",
        }}
      >
        <strong>Neutral – 30%</strong>
      </Box>
      <TableContainer component={Paper} sx={{ maxWidth: 1200 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableFooter>
            <TableRow>
              <StyledTableCell>Промо/активация</StyledTableCell>
              <StyledTableCell align="right">Канал</StyledTableCell>
              <StyledTableCell align="right">Демография</StyledTableCell>
              <StyledTableCell align="right">Время публикаций</StyledTableCell>
              <StyledTableCell align="right">% отобранных</StyledTableCell>
            </TableRow>
          </TableFooter>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.channel}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.demography}
                </StyledTableCell>
                <StyledTableCell align="right">{row.time}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.percentage}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
