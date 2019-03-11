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
  DeleteButton,
  SaveButton,
  BooleanInput,
  Toolbar,
  ReferenceField
} from "react-admin";
import { parse } from "query-string";

export const AddressesList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="addressLine1" />
      <TextField source="city" />
      <TextField source="zipCode" />
      <TextField source="country" />
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
        <ReferenceField label="Client" source="clientId" reference="clients">
          <TextField source="name" />
        </ReferenceField>
        <TextInput source="addressLine1" />
        <TextInput source="city" />
        <TextInput source="zipCode" />
        <TextInput source="country" />
        <BooleanInput source="isPrimary" />
      </SimpleForm>
    </Create>
  );
};

const CustomEditActions = props => {
  const { record, resource } = props;
  const redirect = `/clients/${record.clientId}/addresses`;
  return (
    <Toolbar {...props}>
      <SaveButton redirect={redirect} />
      <DeleteButton record={record} resource={resource} redirect={redirect} />
    </Toolbar>
  );
};

export const AddressesEdit = props => {
  return (
    <Edit {...props}>
      <SimpleForm toolbar={<CustomEditActions />}>
        <ReferenceField label="Client" source="clientId" reference="clients">
          <TextField source="name" />
        </ReferenceField>
        <TextInput source="addressLine1" label="Address" />
        <TextInput source="city" />
        <TextInput source="zipCode" />
        <TextInput source="country" />
        <BooleanInput source="isPrimary" />
      </SimpleForm>
    </Edit>
  );
};
