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

export const ServiceTypesList = ({ permissions, ...props }) => (
  <List {...props} title={<ServiceTypesTitle />} bulkActionButtons={false}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      {permissions === "admin" && <EditButton />}
    </Datagrid>
  </List>
);

const ServiceTypesTitle = () => {
  return <span>Service dictionary</span>;
};

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
