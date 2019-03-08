import React from "react";
import { EditButton } from "react-admin";

const ConditionalUserEditButton = ({ record, ...rest }) =>
  record.username === "admin" ? null : <EditButton record={record} {...rest} />;

export default ConditionalUserEditButton;
