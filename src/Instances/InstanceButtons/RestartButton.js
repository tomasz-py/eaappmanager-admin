import { Button, Confirm } from "react-admin";
import React, { useState, Fragment } from "react";
import { Autorenew } from "@material-ui/icons";

const RestartButton = props => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    //TODO restart action

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

export default RestartButton;
