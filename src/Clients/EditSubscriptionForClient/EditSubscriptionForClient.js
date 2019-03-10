import React from "react";

import { EditButton } from "react-admin";

const EditSubscriptionForClient = ({ record }) => {
  return (
    <EditButton
      to={`/subscriptions/${record.id}?clientId=${record.clientId}`}
    />
  );
};

export default EditSubscriptionForClient;
