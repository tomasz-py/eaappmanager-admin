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

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import UptimeCounter from "./UptimeCounter";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  column: {
    flexBasis: "20%"
  },
  online: {
    backgroundColor: "#00ff00"
  },
  nononline: {
    backgroundColor: "#ff0000"
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
      {servers.map(server => (
        <ExpansionPanel key={server.id}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.column}>
              {"Name: " + server.name}
            </Typography>
            <Typography className={classes.column}>
              {"Host: " + server.host}
            </Typography>
            <Typography className={classes.column}>
              {"IP: " + server.ip}
            </Typography>
            <Typography className={classes.column}>
              {"Services: " + server.service.length}
            </Typography>
            <Typography
              className={
                server.status.name === "Online"
                  ? classes.online
                  : classes.nononline
              }
            >
              {"Status: " + server.status.name}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <UptimeCounter uptime={server.startTime} />
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell align="right">Port</TableCell>
                  <TableCell align="right">Descritpion</TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {server.service.map(s => (
                  <TableRow key={s.id}>
                    <TableCell component="th" scope="row">
                      {s.servicetype.name}
                    </TableCell>
                    <TableCell align="right">{s.port}</TableCell>
                    <TableCell align="right">{s.description}</TableCell>
                    <TableCell align="right">{s.status.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </Paper>
  );
};

DBServers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DBServers);
