import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Create,
  SimpleForm,
  EditButton,
  Edit,
  DeleteButton,
  SaveButton,
  Toolbar,
  ReferenceField,
  DateInput
} from "react-admin";
import { parse } from "query-string";

export const SubscriptionsList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="clientId" />
      <TextField source="startSub" />
      <TextField source="endSub" />
      <EditButton />
    </Datagrid>
  </List>
);

export const SubscriptionsCreate = props => {
  const { clientId: clientId_string } = parse(props.location.search);
  const clientId = clientId_string ? parseInt(clientId_string, 10) : "";
  const redirect = clientId
    ? `/clients/${clientId}/subscriptions`
    : "/subscriptions/";

  return (
    <Create {...props}>
      <SimpleForm redirect={redirect}>
        <ReferenceField label="Client" source="clientId" reference="clients">
          <TextField source="name" />
        </ReferenceField>
        <DateInput source="startSub" />
        <DateInput source="endSub" />
      </SimpleForm>
    </Create>
  );
};

const CustomEditActions = props => {
  console.log(props);
  const { record, resource } = props;
  const redirect = `/clients/${record.clientId}/subscriptions`;
  return (
    <Toolbar {...props}>
      <SaveButton redirect={redirect} />
      <DeleteButton record={record} resource={resource} redirect={redirect} />
    </Toolbar>
  );
};

export const SubscriptionsEdit = props => {
  return (
    <Edit {...props}>
      <SimpleForm toolbar={<CustomEditActions />}>
        <ReferenceField label="Client" source="clientId" reference="clients">
          <TextField source="name" />
        </ReferenceField>

        <DateInput source="startSub" />
        <DateInput source="endSub" />
      </SimpleForm>
    </Edit>
  );
};
