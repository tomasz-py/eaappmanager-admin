import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  SimpleForm,
  DisabledInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  LongTextInput,
  Create,
  DateInput,
  DateField
} from "react-admin";

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
