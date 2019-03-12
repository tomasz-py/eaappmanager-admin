import React from "react";
import { Button } from "react-admin";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Add } from "@material-ui/icons";

const styles = {
  button: {
    marginTop: "1em"
  }
};

const AddAddressForClient = ({ classes, record }) => (
  <Button
    className={classes.button}
    component={Link}
    to={`/addresses/create?clientId=${record.id}`}
    title="Add address"
    label="Add address"
  >
    <Add />
  </Button>
);

export default withStyles(styles)(AddAddressForClient);
