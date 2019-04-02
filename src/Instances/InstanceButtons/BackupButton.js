import { Button, Confirm } from "react-admin";
import React, { useState, Fragment } from "react";
import { Autorenew } from "@material-ui/icons";

const BackupButton = props => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    //TODO backup action

    setOpen(false);
  };

  return (
    <Fragment>
      <Button label="Backup" onClick={handleClick}>
        <Autorenew />
      </Button>

      <Confirm
        isOpen={isOpen}
        title="Backup instance"
        content="Are you sure you want to BACKUP this instance?"
        onConfirm={handleConfirm}
        onClose={handleDialogClose}
      />
    </Fragment>
  );
};

export default BackupButton;
