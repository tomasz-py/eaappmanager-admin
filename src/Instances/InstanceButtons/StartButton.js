import { Button, Confirm } from "react-admin";
import React, { useState, Fragment } from "react";
import { PlayArrow } from "@material-ui/icons";

const StartButton = props => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    //TODO start action

    setOpen(false);
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
