import React from "react";
import { Admin, Resource } from "react-admin";
import Dashboard from "./Dashboard/Dashboard";
import UserIcon from "@material-ui/icons/Group";
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
    />
    <Resource
      name="clients"
      list={ClientsList}
      create={ClientsCreate}
      edit={ClientsEdit}
    />
    <Resource
      name="addresses"
      // list={AddressesList}
      create={AddressesCreate}
      edit={AddressesEdit}
    />
    <Resource
      name="subscriptions"
      list={SubscriptionsList}
      create={SubscriptionsCreate}
      edit={SubscriptionsEdit}
    />
  </Admin>
);

export default App;
