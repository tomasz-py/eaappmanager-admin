import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput
} from "react-admin";
import ServicesGetData from "./ServicesGetData";
import { Link } from "react-router-dom";

export const InstanceserviceList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="serviceId" reference="services">
        <TextField source="id" />
      </ReferenceField>
      <ReferenceField source="instanceId" reference="instances">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const InstanceserviceCreate = props => {
  return <ServicesGetData search={props.location.search} />;
};
