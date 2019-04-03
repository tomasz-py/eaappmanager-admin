import React from "react";
import { CardActions, EditButton, ListButton } from "react-admin";

import StartButton from "./InstanceButtons/StartButton";
import StopButton from "./InstanceButtons/StopButton";
import RestartButton from "./InstanceButtons/RestartButton";
import BackupButton from "./InstanceButtons/BackupButton";

const InstanceActions = ({ basePath, data, hasList }) => {
  //walkaround, cannot read property of undefinied
  if (data) {
    if (data.hasOwnProperty("statusId")) {
      return (
        <CardActions>
          <EditButton basePath={basePath} record={data} />
          {hasList && <ListButton basePath={basePath} />}
          <StartButton data={data} />
          <StopButton data={data} />
          <RestartButton data={data} />
          <BackupButton data={data} />
        </CardActions>
      );
    }
    return <EditButton basePath={basePath} record={data} />;
  }
  return <EditButton basePath={basePath} record={data} />;
};
export default InstanceActions;
