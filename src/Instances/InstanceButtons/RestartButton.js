import { Button, Confirm, GET_ONE } from "react-admin";
import React, { useState, Fragment } from "react";
import { Autorenew } from "@material-ui/icons";
import { dataProvider } from "../../App";

const RestartButton = ({ data }) => {
  const [isOpen, setOpen] = useState(false);

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
      .then(({ data }) => console.log(data.instance[0].service))
      .catch(e => console.log(e))
      .finally(() => {
        console.log("finally");
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

export default RestartButton;
