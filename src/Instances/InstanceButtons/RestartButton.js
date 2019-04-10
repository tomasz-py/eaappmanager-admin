import {
  Button,
  Confirm,
  GET_ONE,
  CREATE,
  UPDATE,
  refreshView
} from "react-admin";
import React, { useState, Fragment } from "react";
import { Autorenew } from "@material-ui/icons";
import { dataProvider } from "../../App";
import { connect } from "react-redux";

const RestartButton = ({ data, refreshView }) => {
  const [isOpen, setOpen] = useState(false);

  const serviceIds = [];

  const handleClick = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    dataProvider(GET_ONE, "instances/services-torestart", {
      id: data.id
    })
      .then(({ data }) => {
        let services = data.instance[0].service;
        services.map(service => {
          dataProvider(CREATE, "queues", {
            data: {
              tableName: "service",
              itemId: service.id,
              statusId: 3,
              action: "Restart"
            }
          })
            .then(
              dataProvider(UPDATE, "services", {
                id: service.id,
                data: {
                  statusId: 5
                }
              })
            )

            .catch(e => console.log(e));
        });
        return serviceIds;
      })

      .catch(e => console.log(e))
      .finally(() => {
        refreshView();
      });

    setOpen(false);
  };

  return (
    <Fragment>
      <Button label="Restart" onClick={handleClick}>
        <Autorenew />
      </Button>

      <Confirm
        isOpen={isOpen}
        title="Restart instance"
        content="Are you sure you want to RESTART this instance?"
        onConfirm={handleConfirm}
        onClose={handleDialogClose}
      />
    </Fragment>
  );
};

export default connect(
  null,
  { refreshView }
)(RestartButton);
