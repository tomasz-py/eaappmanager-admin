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
  DateField,
  ImageField
} from "react-admin";
import AddAddressForClient from "./AddAddress";
import EditAddressForClient from "./EditAddress";
import AddSubscriptionForClient from "./AddSubscription";
import EditSubscriptionForClient from "./EditSubscription";

const ClientTitle = ({ record }) => {
  return <span>Edit client: {record ? `${record.name}` : ""}</span>;
};
//return <span>Post {record ? `"${record.title}"` : ""}</span>;
export const ClientsList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <ImageField source="logo" title="logo" />
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
      <LongTextInput source="name" />
      <LongTextInput source="description" />
      <LongTextInput source="website" />
      <LongTextInput source="logo" label="Logo URL" />
    </SimpleForm>
  </Create>
);

export const ClientsEdit = props => (
  <Edit {...props} title={<ClientTitle />}>
    <TabbedForm>
      <FormTab label="Client">
        <LongTextInput source="name" />
        <LongTextInput source="description" />
        <LongTextInput source="website" />
        <LongTextInput source="logo" label="Logo URL" />
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
            <DateField source="startSub" />
            <DateField source="endSub" />
            <EditSubscriptionForClient />
          </Datagrid>
        </ReferenceManyField>
        <AddSubscriptionForClient />
      </FormTab>
    </TabbedForm>
  </Edit>
);
