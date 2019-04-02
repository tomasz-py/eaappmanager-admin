import React from "react";
import { CardActions, EditButton, ListButton } from "react-admin";

import StartButton from "./InstanceButtons/StartButton";
import StopButton from "./InstanceButtons/StopButton";
import RestartButton from "./InstanceButtons/RestartButton";
import BackupButton from "./InstanceButtons/BackupButton";

const InstanceActions = ({ basePath, data, hasList }) => (
  <CardActions>
    <EditButton basePath={basePath} record={data} />
    {hasList && <ListButton basePath={basePath} />}
    {/* {data.statusId === 3 && <StartButton data={data} />} */}
    <StartButton data={data} />
    <StopButton data={data} />
    <RestartButton data={data} />
    <BackupButton data={data} />
  </CardActions>
);
export default InstanceActions;
