import { Button, Confirm, UPDATE, CREATE, showNotification } from "react-admin";
import React, { useState, Fragment } from "react";
import { Stop } from "@material-ui/icons";
import { dataProvider } from "../../App";

const StopButton = ({ data }) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    console.log(data.id);

    dataProvider(CREATE, "queues", {
      data: {
        tableName: "Instance",
        itemId: data.id,
        statusId: 3,
        action: "Stop"
      }
    })
      .then(
        dataProvider(UPDATE, "instances", {
          id: data.id,
          data: {
            statusId: 4
          }
        })
      )
      .catch(e => console.log(e))
      .finally(() => {
        setOpen(false);

        window.location.reload();
      });
  };

  return (
    <Fragment>
      <Button label="Stop" onClick={handleClick}>
        <Stop />
      </Button>

      <Confirm
        isOpen={isOpen}
        title="Stop instance"
        content="Are you sure you want to STOP this instance?"
        onConfirm={handleConfirm}
        onClose={handleDialogClose}
      />
    </Fragment>
  );
};

export default StopButton;
