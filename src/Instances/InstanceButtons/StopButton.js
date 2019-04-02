import { Button, Confirm } from "react-admin";
import React, { useState, Fragment } from "react";
import { Stop } from "@material-ui/icons";

const StopButton = props => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    //TODO stop action

    setOpen(false);
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
