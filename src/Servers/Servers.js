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
  Show,
  ShowButton,
  ReferenceField,
  ReferenceInput,
  SelectInput
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
      <ReferenceField
        label="Status"
        source="statusId"
        reference="statuses"
        linkType={false}
      >
        <TextField source="name" />
      </ReferenceField>
      <ShowButton />
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
      <ReferenceInput label="Status" source="statusId" reference="statuses">
        <SelectInput optionText="name" />
      </ReferenceInput>
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
          <ReferenceInput label="Status" source="statusId" reference="statuses">
            <SelectInput optionText="name" />
          </ReferenceInput>
        </FormTab>
        <FormTab label="Details" path="serversdetails">
          <ReferenceManyField
            label=""
            reference="serversdetails"
            target="serverId"
          >
            <Datagrid>
              <TextField source="companyName" label="Company" />
              <TextField source="country" />
              <TextField source="region" />
              <EditServerDetails />
            </Datagrid>
          </ReferenceManyField>
          <AddServerDetails />
        </FormTab>
        <FormTab label="Services" path="services">
          <ReferenceManyField label="" reference="services" target="serverId">
            <Datagrid>
              <TextField source="id" />
              <ReferenceField
                label="Service type"
                source="serviceTypeId"
                reference="servicetypes"
                linkType={false}
              >
                <TextField source="name" />
              </ReferenceField>
              <ReferenceField
                label="Status"
                source="statusId"
                reference="statuses"
                linkType={false}
              >
                <TextField source="name" />
              </ReferenceField>
              <TextField source="port" />
              <TextField source="description" />
              <EditButton />
            </Datagrid>
          </ReferenceManyField>
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

export const ServersShow = props => {
  return (
    <Show {...props}>
      <TabbedForm>
        <FormTab label="Server">
          <TextField source="name" />
          <TextField source="host" />
          <TextField source="ip" />
          <TextField source="description" />
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
        <FormTab label="Services" path="services">
          <ReferenceManyField label="" reference="services" target="serverId">
            <Datagrid>
              <TextField source="id" />
              <ReferenceField
                label="Service type"
                source="serviceTypeId"
                reference="servicetypes"
                linkType={false}
              >
                <TextField source="name" />
              </ReferenceField>
              <ReferenceField
                label="Status"
                source="statusId"
                reference="statuses"
                linkType={false}
              >
                <TextField source="name" />
              </ReferenceField>
              <TextField source="port" />
              <TextField source="description" />
              <EditButton />
            </Datagrid>
          </ReferenceManyField>
        </FormTab>
      </TabbedForm>
    </Show>
  );
};
