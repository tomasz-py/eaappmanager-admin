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
import ConditionalUserEditButton from "./ConditionalUserEditButton/ConditionalUserEditButton";

export const UsersList = props => (
  <List {...props} title={<UsersTitle />}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="realm" />
      <TextField source="email" />
      <ConditionalUserEditButton />
    </Datagrid>
  </List>
);

const UsersTitle = ({ record }) => {
  return <span>Users</span>;
};

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
      <TextInput source="password" type="password" resettable />
    </SimpleForm>
  </Edit>
);
