import { Button, Confirm, CREATE } from "react-admin";
import React, { useState, Fragment } from "react";
import { Backup } from "@material-ui/icons";
import { dataProvider } from "../../App";

const BackupButton = ({ data }) => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenDone, setOpenDone] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleDialogIsDoneClose = () => {
    setOpenDone(false);
  };

  const handleConfirm = () => {
    dataProvider(CREATE, "queues", {
      data: {
        tableName: "Instance",
        itemId: data.id,
        statusId: 3,
        action: "Backup"
      }
    })
      .catch(e => console.log(e))
      .finally(() => {
        setOpen(false);
        setOpenDone(true);
      });
  };

  return (
    <Fragment>
      <Button label="Backup" onClick={handleClick}>
        <Backup />
      </Button>

      <Confirm
        isOpen={isOpen}
        title="Backup instance"
        content="Are you sure you want to BACKUP this instance?"
        onConfirm={handleConfirm}
        onClose={handleDialogClose}
      />
      <Confirm
        isOpen={isOpenDone}
        title="Backup instance"
        content="Backup in queue"
        onConfirm={handleDialogIsDoneClose}
        onClose={handleDialogIsDoneClose}
      />
    </Fragment>
  );
};

export default BackupButton;
