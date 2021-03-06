import React from "react";
import { Button } from "react-admin";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Done } from "@material-ui/icons";

const styles = {
  button: {
    marginTop: "1em"
  }
};

const AssignServiceButton = ({ classes, id }) => (
  <Button
    className={classes.button}
    component={Link}
    to={`/instanceservices/create?instanceId=${id}`}
    title="Assign service"
    label="Assign/Unassign service"
  >
    <Done />
  </Button>
);

export default withStyles(styles)(AssignServiceButton);
