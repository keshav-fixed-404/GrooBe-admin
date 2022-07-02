import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, appId, serviceType, salonName, address, contactNo) {
  return { name, appId, serviceType, salonName, address, contactNo };
}

const rows = [
  createData("Aman Kumar", 18908424, "Home Service", "Men Salon", "Mohali, Punjab", "4385734"),
  createData("Vineeta", 18938428, "On Shop", "Women Buityy", "Chandigarh, India", "657834"),
  createData("Ashneer Grover", 18908425, "Home Service", "HEllo Salon", "Mohali, Punjab", "4328746"),
  createData("Harsh", 18908421, "Road pe", "XXXX", "New Delhi", "3276487"),
];

// This is for the payment status 
// const makeStyle = (status) => {
//   if (status === 'Approved') {
//     return {
//       background: 'rgb(145 254 159 / 47%)',
//       color: 'green',
//     }
//   }
//   else if (status === 'Pending') {
//     return {
//       background: '#ffadad8f',
//       color: 'red',
//     }
//   }
//   else {
//     return {
//       background: '#59bfff',
//       color: 'white',
//     }
//   }
// }

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Recent Orders</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>Product</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell> */}

              <TableCell>Name</TableCell>
              <TableCell align="left">App ID</TableCell>
              <TableCell align="left">Service Type</TableCell>
              <TableCell align="left">Salon Name</TableCell>
              <TableCell align="left">Address</TableCell>
              <TableCell align="left">Contact No.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">  
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.appId}</TableCell>
                <TableCell align="left">{row.serviceType}</TableCell>
                <TableCell align="left">{row.salonName}</TableCell>
                <TableCell align="left">{row.address}</TableCell>
                <TableCell align="left">{row.contactNo}</TableCell>
                {/* <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                </TableCell> */}
                <TableCell align="left" className="Details">Details</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
