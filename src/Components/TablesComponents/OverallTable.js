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
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    fontSize: 16,
    textAlign: "center",
    border: 0,
    fontWeight: "bolder",
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: "whitesmoke",
    fontSize: 25,
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // "&:nth-of-type(odd)": {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(totalReviews, uniqueUsers, sentiment) {
  return { totalReviews, uniqueUsers, sentiment };
}

const rows = [
  createData(8078, 1456, "POSITIVE"),
  // createData("PM20221050", "CHATBOT", "женщины", "20:00", "80%"),
  // createData("PM20221047", "CHATBOT", "60+ лет", "20:00", "92%"),
];

export default function OverallTable() {
  return (
    <Grid
      container
      display="flex"
      direction="column"
      alignItems="center"
      justifyContent="center"
      // display="inline-flex"
      // marginTop="10px"
    >
      <TableContainer component={Paper} sx={{ maxWidth: 1200 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableFooter>
            <TableRow>
              <StyledTableCell>Всего отзывов</StyledTableCell>
              <StyledTableCell align="right">
                Всего уникальных юзеров
              </StyledTableCell>
              <StyledTableCell align="right">Преобладающий тон</StyledTableCell>
            </TableRow>
          </TableFooter>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.totalReviews}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.uniqueUsers}
                </StyledTableCell>
                <StyledTableCell align="right">{row.sentiment}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
