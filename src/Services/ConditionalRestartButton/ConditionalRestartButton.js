import React from "react";
import { Button } from "react-admin";
import RefreshIcon from "@material-ui/icons/Refresh";

const ConditionalRestartButton = ({ record, ...rest }) => {
  const onClickHandler = () => {
    console.log(rest);
  };

  return record.toRestart ? (
    <Button label="Restart" onClick={onClickHandler}>
      <RefreshIcon />
    </Button>
  ) : null;
};
export default ConditionalRestartButton;

//record.toRestart ? <EditButton record={record} {...rest} /> : null;
