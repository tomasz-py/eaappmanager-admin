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
  ReferenceManyField,
  TabbedForm,
  FormTab,
  LongTextInput,
  DateField
} from "react-admin";
import AddAddressForClient from "./AddAddressForClient/AddAddressForClient";
import EditAddressForClient from "./EditAddressForClient/EditAddressForClient";
import AddSubscriptionForClient from "./AddSubscriptionForClient/AddSubscriptionForClient";
import EditSubscriptionForClient from "./EditSubscriptionForClient/EditSubscriptionForClient";

const ClientTitle = ({ record }) => {
  return <span>Edit client: {record ? `${record.name}` : ""}</span>;
};
//return <span>Post {record ? `"${record.title}"` : ""}</span>;
export const ClientsList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="website" />
      <ReferenceManyField
        reference="addresses"
        target="clientId"
        label="Adresses"
      >
        <Datagrid>
          <TextField source="country" />
        </Datagrid>
      </ReferenceManyField>
      <EditButton />
    </Datagrid>
  </List>
);

//const redirectOnClientCreate = () => `/clients/`;

export const ClientsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="website" />
    </SimpleForm>
  </Create>
);

export const ClientsEdit = props => (
  <Edit {...props} title={<ClientTitle />}>
    <TabbedForm>
      <FormTab label="Client">
        <TextInput source="name" />
        <LongTextInput source="description" />
        <TextInput source="website" />
      </FormTab>
      <FormTab label="Addresses" path="addresses">
        <ReferenceManyField label="" reference="addresses" target="clientId">
          <Datagrid>
            <TextField source="addressLine1" label="Address" />
            <TextField source="city" />
            <TextField source="zipCode" />
            <TextField source="country" />
            <TextField source="isPrimary" />
            <EditAddressForClient />
          </Datagrid>
        </ReferenceManyField>
        <AddAddressForClient />
      </FormTab>
      <FormTab label="Subscriptions" path="subscriptions">
        <ReferenceManyField
          label=""
          reference="subscriptions"
          target="clientId"
        >
          <Datagrid>
            <DateField source="startSub" showTime />
            <DateField source="endSub" showTime />
            <EditSubscriptionForClient />
          </Datagrid>
        </ReferenceManyField>
        <AddSubscriptionForClient />
      </FormTab>
    </TabbedForm>
  </Edit>
);
