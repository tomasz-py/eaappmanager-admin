import React from "react";

import { EditButton } from "react-admin";

const EditServerDetails = ({ record }) => {
  return (
    <EditButton
      to={`/serversdetails/${record.id}?serverId=${record.serverId}`}
    />
  );
};

export default EditServerDetails;
