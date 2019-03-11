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
  LongTextInput,
  TabbedForm,
  FormTab,
  ReferenceManyField,
  SaveButton
} from "react-admin";
import AddServerDetails from "./ServersDetails/AddSD";
import EditServerDetails from "./ServersDetails/EditSD.js";

export const ServersList = props => (
  <List {...props} title={<ServerTitle />}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="host" />
      <TextField source="ip" />
      <TextField source="description" />
      <EditButton />
    </Datagrid>
  </List>
);

const ServerTitle = () => {
  return <span>Servers</span>;
};

export const ServersCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" resettable />
      <TextInput source="host" resettable />
      <TextInput source="ip" resettable />
      <LongTextInput source="description" resettable />
    </SimpleForm>
  </Create>
);

export const ServersEdit = props => {
  return (
    <Edit {...props}>
      <TabbedForm>
        <FormTab label="Server">
          <TextInput source="name" resettable />
          <TextInput source="host" resettable />
          <TextInput source="ip" resettable />
          <LongTextInput source="description" resettable />
        </FormTab>
        <FormTab label="Details" path="serversdetails">
          <ReferenceManyField
            label=""
            reference="serversdetails"
            target="serverId"
          >
            <Datagrid>
              <TextField source="companyname" label="Company" />
              <TextField source="country" />
              <TextField source="region" />
              <EditServerDetails />
            </Datagrid>
          </ReferenceManyField>
          <AddServerDetails />
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};
