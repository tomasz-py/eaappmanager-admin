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
import { parse } from "query-string";

export const AddressesList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="addressLine1" />
      <TextField source="city" />
      <TextField source="zipCode" />
      <TextField source="isPrimary" />
      <EditButton />
    </Datagrid>
  </List>
);

export const AddressesCreate = props => {
  const { clientId: clientId_string } = parse(props.location.search);
  const clientId = clientId_string ? parseInt(clientId_string, 10) : "";
  const redirect = clientId ? `/clients/${clientId}/addresses` : "/addresses/";

  return (
    <Create {...props}>
      <SimpleForm redirect={redirect}>
        <TextInput source="addressLine1" />
        <TextInput source="city" />
        <TextInput source="zipCode" />
        <TextInput source="isPrimary" />
      </SimpleForm>
    </Create>
  );
};

export const AddressesEdit = props => {
  const { clientId: clientId_string } = parse(props.location.search);
  const clientId = clientId_string ? parseInt(clientId_string, 10) : "";
  const redirect = clientId ? `/clients/${clientId}/addresses` : "/addresses/";
  return (
    <Edit {...props}>
      <SimpleForm redirect={redirect}>
        <TextInput source="addressLine1" />
        <TextInput source="city" />
        <TextInput source="zipCode" />
        <TextInput source="isPrimary" />
      </SimpleForm>
    </Edit>
  );
};
