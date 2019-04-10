import { Button, Confirm, UPDATE, CREATE, refreshView } from "react-admin";
import React, { useState, Fragment } from "react";
import { PlayArrow } from "@material-ui/icons";
import { dataProvider } from "../../App";
import { connect } from "react-redux";

const StartButton = ({ data, refreshView }) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
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
        refreshView();
      });
  };

  return (
    <Fragment>
      {/* ability to start instance only when status is offline/new/error*/}
      {data.statusId === 2 || data.statusId === 3 || data.statusId === 6 ? (
        <Button label="Start" onClick={handleClick}>
          <PlayArrow />
        </Button>
      ) : (
        <Button label="Start" onClick={handleClick} disabled>
          <PlayArrow />
        </Button>
      )}

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

export default connect(
  null,
  { refreshView }
)(StartButton);
