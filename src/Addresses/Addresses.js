import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Create,
  TextInput,
  SimpleForm,
  EditButton,
  Edit,
  ReferenceManyField,
  SingleFieldList,
  ChipField
} from "react-admin";

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

export const AddressesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="addressLine1" />
      <TextInput source="city" />
      <TextInput source="zipCode" />
      <TextInput source="isPrimary" />
    </SimpleForm>
  </Create>
);

export const AddressesEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="addressLine1" />
      <TextInput source="city" />
      <TextInput source="zipCode" />
      <TextInput source="isPrimary" />
    </SimpleForm>
  </Edit>
);
