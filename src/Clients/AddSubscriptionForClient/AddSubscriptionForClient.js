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

const AddSubscriptionForClient = ({ classes, record }) => (
  <Button
    className={classes.button}
    component={Link}
    to={`/subscriptions/create?clientId=${record.id}`}
    title="Add subscription"
    label="Add subscription"
  >
    <Add />
  </Button>
);

export default withStyles(styles)(AddSubscriptionForClient);
