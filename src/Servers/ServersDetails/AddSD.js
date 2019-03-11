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

const AddServerDetails = ({ classes, record }) => {
  const test = record ? true : false;
  console.log(test);
  return (
    <Button
      className={classes.button}
      component={Link}
      to={`/serversdetails/create?serverId=${record.id}`}
      title="Add details"
      label="Add details"
    >
      <Add />
    </Button>
  );
};

export default withStyles(styles)(AddServerDetails);
