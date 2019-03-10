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

export const ServiceTypesList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ServiceTypesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" resettable />
    </SimpleForm>
  </Create>
);

export const ServiceTypesEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" resettable />
    </SimpleForm>
  </Edit>
);
