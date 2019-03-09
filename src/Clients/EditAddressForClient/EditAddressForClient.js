import React from "react";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { EditButton } from "react-admin";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const EditAddressForClient = ({ classes, record }) => {
  console.log(record);
  return (
    <EditButton
      component={Link}
      to={`/addresses/${record.id}?clientId=${record.clientId}`}
    />
  );
};

export default EditAddressForClient;
