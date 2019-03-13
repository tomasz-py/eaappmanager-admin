import React from "react";
import { Admin, Resource } from "react-admin";
import Dashboard from "./Dashboard/Dashboard";
import UserIcon from "@material-ui/icons/Group";
import FolderSharedIcon from "@material-ui/icons/FolderShared";
import EventNoteIcon from "@material-ui/icons/EventNote";
import loopbackClient, { authProvider } from "react-admin-loopback";
import { UsersList, UsersCreate, UsersEdit } from "./Users/Users";
import { ClientsList, ClientsCreate, ClientsEdit } from "./Clients/Clients";
import {
  AddressesList,
  AddressesCreate,
  AddressesEdit
} from "./Addresses/Addresses";
import {
  SubscriptionsList,
  SubscriptionsCreate,
  SubscriptionsEdit
} from "./Subscriptions/Subscriptions";
import {
  ServiceTypesList,
  ServiceTypesCreate,
  ServiceTypesEdit
} from "./ServiceTypes/ServicesTypes";
import { ServersList, ServersCreate, ServersEdit } from "./Servers/Servers";
import {
  ServersDetailsList,
  ServersDetailsEdit,
  ServersDetailsCreate
} from "./Servers/ServersDetails/ServersDetails";
import {
  StatusesList,
  StatusesCreate,
  StatusesEdit
} from "./Statuses/Statuses";

const dataProvider = loopbackClient("http://localhost:3000/api/");

const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider("http://localhost:3000/api/appusers/login")}
  >
    <Resource
      name="appusers"
      list={UsersList}
      icon={UserIcon}
      create={UsersCreate}
      edit={UsersEdit}
      options={{ label: "Users" }}
    />
    <Resource
      name="clients"
      list={ClientsList}
      create={ClientsCreate}
      edit={ClientsEdit}
      icon={FolderSharedIcon}
      options={{ label: "Clients" }}
    />
    <Resource
      name="addresses"
      // list={AddressesList}
      create={AddressesCreate}
      edit={AddressesEdit}
    />
    <Resource
      name="subscriptions"
      // list={SubscriptionsList}
      create={SubscriptionsCreate}
      edit={SubscriptionsEdit}
    />
    <Resource
      name="servicetypes"
      list={ServiceTypesList}
      create={ServiceTypesCreate}
      edit={ServiceTypesEdit}
      icon={EventNoteIcon}
      options={{ label: "Service dictionary" }}
    />
    <Resource
      name="servers"
      list={ServersList}
      create={ServersCreate}
      edit={ServersEdit}
      icon={EventNoteIcon}
      options={{ label: "Servers" }}
    />
    <Resource
      name="serversdetails"
      list={ServersDetailsList}
      create={ServersDetailsCreate}
      edit={ServersDetailsEdit}
    />
    <Resource
      name="statuses"
      list={StatusesList}
      create={StatusesCreate}
      edit={StatusesEdit}
    />
  </Admin>
);

export default App;
