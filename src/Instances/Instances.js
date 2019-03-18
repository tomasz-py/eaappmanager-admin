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
  FormTab
} from "react-admin";
import InstanceServicesGetData from "./InstanceServices/InstanceServicesGetData";
import AssignServiceButton from "./InstanceServices/AssignServiceButton";

export const InstancesList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="clientId" reference="clients">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="name" label="Instance name" />
      <TextField source="description" />
      <DateField source="expirationDate" />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);

export const InstancesEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput source="clientId" reference="clients">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="name" />
      <LongTextInput source="description" />
      <DateInput source="expirationDate" />
      <ReferenceInput source="statusId" reference="statuses">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
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
      <ReferenceInput source="statusId" reference="statuses">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const InstancesShow = props => {
  return (
    <Show {...props}>
      <TabbedForm>
        <FormTab label="Instance">
          <SimpleShowLayout>
            <ReferenceField source="clientId" reference="clients">
              <TextField source="name" />
            </ReferenceField>
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="expirationDate" />

            <ReferenceField source="statusId" reference="statuses">
              <TextField source="name" />
            </ReferenceField>
          </SimpleShowLayout>
        </FormTab>
        <FormTab label="Services" path="instanceservices">
          <InstanceServicesGetData {...props} />
          <AssignServiceButton {...props} />
        </FormTab>
      </TabbedForm>
    </Show>
  );
};
