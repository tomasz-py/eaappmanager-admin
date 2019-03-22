import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { GET_LIST } from "react-admin";
import { dataProvider } from "../../App";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9)
// ];

const DBServers = props => {
  const [servers, setServers] = useState([]);

  const getData = () => {
    dataProvider(GET_LIST, "servers", {
      filter: {},
      sort: { field: "id", order: "DESC" },
      pagination: { page: 1, perPage: 10 },
      include: [
        {
          relation: "service",
          scope: {
            include: [{ relation: "servicetype" }, { relation: "status" }]
          }
        },
        { relation: "status" }
      ]
    })
      .then(response => {
        setServers(response.data);
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    getData();
  }, []);

  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Host</TableCell>
            <TableCell align="right">IP</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {servers.map(server => (
            <TableRow key={server.id}>
              <TableCell component="th" scope="row">
                {server.name}
              </TableCell>
              <TableCell align="right">{server.host}</TableCell>
              <TableCell align="right">{server.ip}</TableCell>
              <TableCell align="right">{server.status.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

DBServers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DBServers);
