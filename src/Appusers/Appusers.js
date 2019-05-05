import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Create,
  TextInput,
  SimpleForm,
  Edit
} from "react-admin";
import ConditionalUserEditButton from "./ConditionalUserEditButton/ConditionalUserEditButton";

export const AppUsersList = props => (
  <List {...props} title={<UsersTitle />} bulkActionButtons={false}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="realm" />
      <TextField source="email" />
      <ConditionalUserEditButton />
    </Datagrid>
  </List>
);

const UsersTitle = () => {
  return <span>Users</span>;
};

export const AppUsersCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="username" resettable />
      <TextInput source="realm" resettable />
      <TextInput source="email" resettable />
      <TextInput source="password" type="password" resettable />
    </SimpleForm>
  </Create>
);

export const AppUsersEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="username" resettable />
      <TextInput source="realm" resettable />
      <TextInput source="email" resettable />
      <TextInput source="password" type="password" resettable />
    </SimpleForm>
  </Edit>
);
