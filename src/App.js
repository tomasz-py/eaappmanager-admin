import React from "react";
import { Admin, Resource } from "react-admin";
import Dashboard from "./Dashboard/Dashboard";
import UserIcon from "@material-ui/icons/Group";
import FolderSharedIcon from "@material-ui/icons/FolderShared";
import StorageIcon from "@material-ui/icons/Storage";
import SettingsIcon from "@material-ui/icons/Settings";
import DvrIcon from "@material-ui/icons/Dvr";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import loopbackClient, { authProvider } from "react-admin-loopback";
import { UsersList, UsersCreate, UsersEdit } from "./Users/Users";
import { ClientsList, ClientsCreate, ClientsEdit } from "./Clients/Clients";
import { AddressesCreate, AddressesEdit } from "./Addresses/Addresses";
import {
  SubscriptionsCreate,
  SubscriptionsEdit
} from "./Subscriptions/Subscriptions";
import {
  ServiceTypesList,
  ServiceTypesCreate,
  ServiceTypesEdit
} from "./ServiceTypes/ServicesTypes";
import {
  ServersList,
  ServersCreate,
  ServersEdit,
  ServersShow
} from "./Servers/Servers";
import {
  ServersDetailsEdit,
  ServersDetailsCreate
} from "./Servers/ServersDetails/ServersDetails";
import {
  StatusesList,
  StatusesCreate,
  StatusesEdit
} from "./Statuses/Statuses";
import {
  ServicesList,
  ServicesEdit,
  ServicesCreate
} from "./Services/Services";
import {
  InstancesList,
  InstancesCreate,
  InstancesEdit,
  InstancesShow
} from "./Instances/Instances";
import {
  //InstanceserviceList,
  InstanceserviceCreate
} from "./Instances/InstanceServices/InstanceServices";

export const dataProvider = loopbackClient("http://localhost:3000/api/");

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
      name="servers"
      list={ServersList}
      create={ServersCreate}
      edit={ServersEdit}
      show={ServersShow}
      icon={StorageIcon}
      options={{ label: "Servers" }}
    />
    <Resource
      name="services"
      list={ServicesList}
      create={ServicesCreate}
      edit={ServicesEdit}
      icon={SettingsIcon}
    />
    <Resource
      name="servicetypes"
      list={ServiceTypesList}
      create={ServiceTypesCreate}
      edit={ServiceTypesEdit}
      icon={FormatListBulletedIcon}
      options={{ label: "Services dictionary" }}
    />
    <Resource
      name="serversdetails"
      //list={ServersDetailsList}
      create={ServersDetailsCreate}
      edit={ServersDetailsEdit}
    />
    <Resource
      name="statuses"
      list={StatusesList}
      create={StatusesCreate}
      edit={StatusesEdit}
      icon={FormatListBulletedIcon}
      options={{ label: "Statuses dictionary" }}
    />
    <Resource
      name="instances"
      list={InstancesList}
      create={InstancesCreate}
      edit={InstancesEdit}
      show={InstancesShow}
      icon={DvrIcon}
    />
    <Resource
      name="instanceservices"
      //list={InstanceserviceList}
      create={InstanceserviceCreate}
    />
  </Admin>
);

export default App;
