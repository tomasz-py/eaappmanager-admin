import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Create,
  TextInput,
  SimpleForm,
  EditButton,
  Edit
} from "react-admin";

export const StatusesList = ({ permissions, ...props }) => (
  <List {...props} bulkActionButtons={false}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      {permissions === "admin" && <EditButton />}
    </Datagrid>
  </List>
);

export const StatusesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" resettable />
    </SimpleForm>
  </Create>
);

export const StatusesEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" resettable />
    </SimpleForm>
  </Edit>
);
