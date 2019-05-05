import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  SimpleForm,
  TabbedForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  LongTextInput,
  Create,
  DateInput,
  DateField,
  ShowButton,
  Show,
  SimpleShowLayout,
  FormTab,
  DisabledInput
} from "react-admin";
import InstanceServicesGetData from "./InstanceServices/InstanceServicesGetData";
import AssignServiceButton from "./InstanceServices/AssignServiceButton";
import CreateServiceButton from "./InstanceServices/CreateServiceButton";
import InstanceActions from "./InstanceButtons";

export const InstancesList = ({ permissions, ...props }) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="clientId" reference="clients">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="name" label="Instance name" />
      <TextField source="description" />
      <DateField source="expirationDate" />
      <ReferenceField source="statusId" reference="statuses">
        <TextField source="name" />
      </ReferenceField>
      <ShowButton />
      {permissions === "admin" && <EditButton />}
    </Datagrid>
  </List>
);

export const InstancesEdit = props => (
  <Edit {...props}>
    <TabbedForm>
      <FormTab label="Instance">
        <ReferenceInput source="clientId" reference="clients">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="name" />
        <LongTextInput source="description" />
        <DateInput source="expirationDate" />
        <ReferenceInput source="statusId" reference="statuses">
          <SelectInput optionText="name" />
        </ReferenceInput>
      </FormTab>
      <FormTab label="Services" path="instanceservices">
        <InstanceServicesGetData {...props} />
        <AssignServiceButton {...props} />
        <CreateServiceButton {...props} />
      </FormTab>
    </TabbedForm>
  </Edit>
);

export const InstancesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="clientId" reference="clients">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="name" />
      <LongTextInput source="description" />
      <DateInput source="expirationDate" />
      <DisabledInput
        label="Status: New"
        source="statusId"
        defaultValue="3" // status 3 = new
        type="hidden"
      />
    </SimpleForm>
  </Create>
);

export const InstancesShow = props => {
  return (
    <Show {...props} actions={<InstanceActions />}>
      <TabbedForm>
        <FormTab label="Instance">
          <SimpleShowLayout>
            <ReferenceField source="clientId" reference="clients">
              <TextField source="name" />
            </ReferenceField>
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="expirationDate" />

            <ReferenceField
              source="statusId"
              reference="statuses"
              linkType={false}
            >
              <TextField source="name" />
            </ReferenceField>
          </SimpleShowLayout>
        </FormTab>
        <FormTab label="Services" path="instanceservices">
          <InstanceServicesGetData {...props} />
          <AssignServiceButton {...props} />
          <CreateServiceButton {...props} />
        </FormTab>
      </TabbedForm>
    </Show>
  );
};
