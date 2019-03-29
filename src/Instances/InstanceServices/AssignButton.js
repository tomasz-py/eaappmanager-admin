import React from "react";
import { Button } from "react-admin";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Done, Clear } from "@material-ui/icons";
import { dataProvider } from "../../App";
import { CREATE, DELETE } from "react-admin";

const styles = {
  button: {
    marginTop: "1em"
  }
};

const AssignButton = ({ classes, instanceId, serviceId, assignedServices }) => {
  const assignedServicesIds = assignedServices.map(
    service => service.serviceId
  );

  const instanceServiceObj = assignedServices.find(
    o => o.serviceId === serviceId
  );

  const onAssignClickHandler = () => {
    dataProvider(CREATE, "instanceservices", {
      data: { serviceId: serviceId, instanceId: instanceId }
    });
  };

  const onRemoveClickHandler = () => {
    dataProvider(DELETE, "instanceservices", {
      id: instanceServiceObj.id
    });
  };

  //Render button assign/unassing depends on instance-service connection
  if (assignedServicesIds.indexOf(serviceId) > -1) {
    return (
      <Button
        className={classes.button}
        component={Link}
        //to={`/addresses/create?clientId=${record.id}`}
        to={`/instances/${instanceId}/show/instanceservices`}
        title="Unassign"
        label="Unassign"
        onClick={onRemoveClickHandler}
      >
        <Clear />
      </Button>
    );
  } else {
    return (
      <Button
        className={classes.button}
        component={Link}
        //to={`/addresses/create?clientId=${record.id}`}
        to={`/instances/${instanceId}/show/instanceservices`}
        title="Assign"
        label="Assign"
        onClick={onAssignClickHandler}
      >
        <Done />
      </Button>
    );
  }
};

export default withStyles(styles)(AssignButton);
