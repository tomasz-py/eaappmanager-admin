import { Button, Confirm, UPDATE, CREATE, refreshView } from "react-admin";
import React, { useState, Fragment } from "react";
import { Stop } from "@material-ui/icons";
import { dataProvider } from "../../App";
import { connect } from "react-redux";

const StopButton = ({ data, refreshView }) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    //change status od instans to inprogress
    dataProvider(UPDATE, "instances", {
      id: data.id,
      data: {
        statusId: 4
      }
    })
      //add to queue
      .then(
        dataProvider(CREATE, "queues", {
          data: {
            tableName: "Instance",
            itemId: data.id,
            statusId: 3,
            action: "Stop"
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
      {/* ability to stop instance only when status is online*/}
      {data.statusId === 1 ? (
        <Button label="Stop" onClick={handleClick}>
          <Stop />
        </Button>
      ) : (
        <Button label="Stop" onClick={handleClick} disabled>
          <Stop />
        </Button>
      )}

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

export default connect(
  null,
  { refreshView }
)(StopButton);
