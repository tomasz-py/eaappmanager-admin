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
  ReferenceInput,
  SelectInput,
  BooleanInput,
  NumberInput,
  ReferenceField
} from "react-admin";

export const ServicesList = props => (
  <List {...props}>
    <Datagrid>
      <ReferenceField label="Server" source="serverId" reference="servers">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField label="IP" source="serverId" reference="servers">
        <TextField source="ip" />
      </ReferenceField>
      <ReferenceField
        label="Service type"
        source="serviceTypeId"
        reference="servicetypes"
      >
        <TextField source="name" />
      </ReferenceField>

      <ReferenceField label="Status" source="statusId" reference="statuses">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="port" />
      <TextField source="description" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ServicesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label="Server" source="serverId" reference="servers">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <ReferenceInput
        label="Service type"
        source="serviceTypeId"
        reference="servicetypes"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="description" resettable />
      <NumberInput source="port" />

      <ReferenceInput label="Status" source="statusId" reference="statuses">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const ServicesEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput label="Server" source="serverId" reference="servers">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <ReferenceInput
        label="Service type"
        source="serviceTypeId"
        reference="servicetypes"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="description" resettable />
      <NumberInput source="port" />

      <ReferenceInput label="Status" source="statusId" reference="statuses">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
