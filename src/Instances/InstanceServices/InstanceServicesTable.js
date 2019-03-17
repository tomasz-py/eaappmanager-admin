import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import { Button } from "react-admin";

// const dataProvider = loopbackClient("http://localhost:3000/api/");

// const styles = theme => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing.unit * 3,
//     overflowX: "auto"
//   },
//   table: {
//     minWidth: 700
//   }
// });

const InstanceServicesTable = props => {
  const services = props.services.data[0].service;

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Service Type</TableCell>
            <TableCell align="right">Port</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">IP</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services.map(service => (
            <TableRow key={service.id}>
              <TableCell component="th" scope="row">
                {service.servicetype.name}
              </TableCell>
              <TableCell align="right">{service.port}</TableCell>
              <TableCell align="right">{service.description}</TableCell>
              <TableCell align="right">{service.server.ip}</TableCell>
              <TableCell align="right">{service.status.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

//export default withStyles(styles)(InstanceServicesTable);
export default InstanceServicesTable;
