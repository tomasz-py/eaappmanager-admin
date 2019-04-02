import { Button, Confirm, UPDATE, CREATE } from "react-admin";
import React, { useState, Fragment } from "react";
import { PlayArrow } from "@material-ui/icons";
import { dataProvider } from "../../App";

const StartButton = ({ data }) => {
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
        action: "Start"
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
      <Button label="Start" onClick={handleClick}>
        <PlayArrow />
      </Button>

      <Confirm
        isOpen={isOpen}
        title="Start instance"
        content="Are you sure you want to START this instance?"
        onConfirm={handleConfirm}
        onClose={handleDialogClose}
      />
    </Fragment>
  );
};

export default StartButton;
