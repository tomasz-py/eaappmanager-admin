import React from "react";

import { EditButton } from "react-admin";

const EditAddressForClient = ({ record }) => {
  return (
    <EditButton to={`/addresses/${record.id}?clientId=${record.clientId}`} />
  );
};

export default EditAddressForClient;
