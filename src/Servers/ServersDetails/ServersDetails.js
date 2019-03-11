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
  Toolbar,
  SaveButton,
  DeleteButton
} from "react-admin";
import { parse } from "query-string";

export const ServersDetailsList = props => (
  <List {...props} title={<ServersDetailsTitle />}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="companyName" />
      <TextField source="country" />
      <TextField source="region" />
      <TextField source="serverId" />
      <EditButton />
    </Datagrid>
  </List>
);

const ServersDetailsTitle = () => {
  return <span>Server details</span>;
};

export const ServersDetailsCreate = props => {
  const { serverId: serverId_string } = parse(props.location.search);
  const serverId = serverId_string ? parseInt(serverId_string, 10) : "";
  const redirect = serverId
    ? `/servers/${serverId}/serversdetails`
    : "/servers/";
  return (
    <Create {...props}>
      <SimpleForm redirect={redirect}>
        <TextInput source="companyName" />
        <TextInput source="country" />
        <TextInput source="region" />
      </SimpleForm>
    </Create>
  );
};

const CustomEditActions = props => {
  const { record, resource } = props;
  const redirect = `/servers/${record.serverId}/serversdetails`;
  return (
    <Toolbar {...props}>
      <SaveButton redirect={redirect} />
      <DeleteButton record={record} resource={resource} redirect={redirect} />
    </Toolbar>
  );
};

export const ServersDetailsEdit = props => (
  <Edit {...props}>
    <SimpleForm toolbar={<CustomEditActions />}>
      <TextInput source="companyName" />
      <TextInput source="country" />
      <TextInput source="region" />
    </SimpleForm>
  </Edit>
);
