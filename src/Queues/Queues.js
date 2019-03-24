import React from "react";
import { List, Datagrid, TextField, ReferenceField } from "react-admin";

export const QueueList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="tableName" />
      <TextField source="itemId" />
      <TextField source="action" />
      <TextField source="statusId" label="StatusId" />
      <ReferenceField source="statusId" reference="statuses">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="message" />
    </Datagrid>
  </List>
);
