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

export const UsersList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="realm" />
      <TextField source="email" />
      <EditButton />
    </Datagrid>
  </List>
);

export const UsersCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="username" resettable />
      <TextInput source="realm" resettable />
      <TextInput source="email" resettable />
      <TextInput source="password" type="password" resettable />
    </SimpleForm>
  </Create>
);

export const UsersEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="username" resettable />
      <TextInput source="realm" resettable />
      <TextInput source="email" resettable />
    </SimpleForm>
  </Edit>
);
