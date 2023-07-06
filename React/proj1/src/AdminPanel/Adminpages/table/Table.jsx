import React from "react";
import "../table/Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ListTable = () => {
  const rows = [
    {
      id: "001",
      case: "Divorce case",
      client: "John Smith",
      date: "01/03/2023",
      assignedlawyer: "alex starc",
      status: "Begin",
    },
    {
      id: "002",
      case: "Company case",
      client: "Will Smith",
      date: "01/03/2023",
      assignedlawyer: "Mitchel starc",
      status: "Intermediate",
    },
    {
      id: "003",
      case: "Murder case",
      client: "poul warner",
      date: "01/03/2023",
      assignedlawyer: "Marcus Dupree",
      status: "Begin",
    },
    {
      id: "004",
      case: "Cyber case",
      client: "Tim Paine",
      date: "01/03/2023",
      assignedlawyer: "Peter Handscomb",
      status: "Begin",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell">
              <strong>ID</strong>
            </TableCell>
            <TableCell className="tablecell">
              <strong>Case</strong>
            </TableCell>
            <TableCell className="tablecell">
              <strong>Client</strong>
            </TableCell>
            <TableCell className="tablecell">
              <strong>Date</strong>
            </TableCell>
            <TableCell className="tablecell">
              <strong>Assigned Lawyer</strong>
            </TableCell>
            <TableCell className="tablecell">
              <strong>Status</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <strong>{row.id}</strong>
              </TableCell>
              <TableCell className="tablecell">{row.case}</TableCell>
              <TableCell className="tablecell">{row.client}</TableCell>
              <TableCell className="tablecell">{row.date}</TableCell>
              <TableCell className="tablecell">{row.assignedlawyer}</TableCell>
              <TableCell className="tablecell">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListTable;
