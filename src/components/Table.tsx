import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

import TableList from "./TableList";
const TableComponent = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Apellido</TableCell>
            <TableCell align="center">Empresa</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableList />
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
