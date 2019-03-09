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
  TabbedForm,
  FormTab,
  ShowButton
} from "react-admin";
import AddAddressForClient from "./AddAddressForClient/AddAddressForClient";
import EditAddressForClient from "./EditAddressForClient/EditAddressForClient";

export const ClientsList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="website" />
      <ReferenceManyField
        reference="addresses"
        target="clientId"
        label="Adresses"
      >
        <Datagrid>
          <TextField label="Street" source="addressLine1" />
          <TextField label="City" source="city" />
        </Datagrid>
      </ReferenceManyField>
      <EditButton />
    </Datagrid>
  </List>
);

const redirectOnClientCreate = () => `/clients/`;

export const ClientsCreate = props => (
  <Create {...props}>
    <SimpleForm redirect={redirectOnClientCreate}>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="website" />
    </SimpleForm>
  </Create>
);

// export const ClientsCreate = props => (
//   <Create {...props}>
//     <SimpleForm>
//       <TextInput source="name" />
//       <TextInput source="description" />
//       <TextInput source="website" />
//     </SimpleForm>
//   </Create>
// );

//Working edit clients:
// export const ClientsEdit = props => (
//   <Edit {...props}>
//     <SimpleForm>
//       <TextInput source="name" />
//       <TextInput source="description" />
//       <TextInput source="website" />
//     </SimpleForm>
//   </Edit>
// );
export const ClientsEdit = props => (
  <Edit {...props}>
    <TabbedForm>
      <FormTab label="Client">
        <TextInput source="name" />
        <TextInput source="description" />
        <TextInput source="website" />
      </FormTab>
      <FormTab label="Addresses" path="addresses">
        <ReferenceManyField reference="addresses" target="clientId">
          <Datagrid>
            <TextField source="addressLine1" />
            <TextField source="city" />
            <TextField source="zipCode" />
            <TextField source="isPrimary" />
            <EditAddressForClient />
          </Datagrid>
        </ReferenceManyField>
        <AddAddressForClient />
      </FormTab>
    </TabbedForm>
  </Edit>
);
