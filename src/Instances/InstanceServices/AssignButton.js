import React from "react";
import { Button } from "react-admin";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Add } from "@material-ui/icons";
import { parse } from "query-string";
import { dataProvider } from "../../App";
import { CREATE } from "react-admin";

const styles = {
  button: {
    marginTop: "1em"
  }
};

const AssignButton = ({ classes, search, serviceId }) => {
  const { instanceId: instanceId_string } = parse(search);
  const instanceId = instanceId_string ? parseInt(instanceId_string, 10) : "";
  //const redirect = search ? `/clients/${search}/addresses` : "/addresses/";

  const onClickHandler = () => {
    console.log(instanceId);
    dataProvider(CREATE, "instanceservices", {
      data: { serviceId: serviceId, instanceId: instanceId }
    });
  };

  return (
    <Button
      className={classes.button}
      component={Link}
      //to={`/addresses/create?clientId=${record.id}`}
      to={`/instances/${instanceId}/show/instanceservices`}
      title="Assign"
      label="Assign"
      onClick={onClickHandler}
    >
      <Add />
    </Button>
  );
};

export default withStyles(styles)(AssignButton);
