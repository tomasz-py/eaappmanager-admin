import React from "react";
import { Admin, Resource } from "react-admin";
import Dashboard from "./Dashboard/Dashboard";
import UserIcon from "@material-ui/icons/Group";
import FolderSharedIcon from "@material-ui/icons/FolderShared";
import StorageIcon from "@material-ui/icons/Storage";
import SettingsIcon from "@material-ui/icons/Settings";
import DvrIcon from "@material-ui/icons/Dvr";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import loopbackClient from "react-admin-loopback";
import { authProvider } from "./authProvider/authProvider";
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
import { QueueList } from "./Queues/Queues";

export const dataProvider = loopbackClient("http://localhost:3000/api/");

const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider("http://localhost:3000/api/appusers/login")}
  >
    {permissions => [
      permissions === "admin" ? (
        <Resource
          key="appusers"
          name="appusers"
          list={UsersList}
          icon={UserIcon}
          create={UsersCreate}
          edit={UsersEdit}
          options={{ label: "Users" }}
        />
      ) : null,
      <Resource
        key="clients"
        name="clients"
        list={ClientsList}
        create={ClientsCreate}
        edit={ClientsEdit}
        icon={FolderSharedIcon}
        options={{ label: "Clients" }}
      />,
      <Resource
        key="addresses"
        name="addresses"
        // list={AddressesList}
        create={AddressesCreate}
        edit={AddressesEdit}
      />,
      <Resource
        key="subscriptions"
        name="subscriptions"
        // list={SubscriptionsList}
        create={SubscriptionsCreate}
        edit={SubscriptionsEdit}
      />,
      <Resource
        key="servers"
        name="servers"
        list={ServersList}
        create={ServersCreate}
        edit={ServersEdit}
        show={ServersShow}
        icon={StorageIcon}
        options={{ label: "Servers" }}
      />,
      <Resource
        key="services"
        name="services"
        list={ServicesList}
        create={ServicesCreate}
        edit={ServicesEdit}
        icon={SettingsIcon}
      />,
      <Resource
        key="servicetypes"
        name="servicetypes"
        list={ServiceTypesList}
        create={ServiceTypesCreate}
        edit={ServiceTypesEdit}
        icon={FormatListBulletedIcon}
        options={{ label: "Services dictionary" }}
      />,
      <Resource
        key="serversdetails"
        name="serversdetails"
        //list={ServersDetailsList}
        create={ServersDetailsCreate}
        edit={ServersDetailsEdit}
      />,
      <Resource
        key="statuses"
        name="statuses"
        list={StatusesList}
        create={StatusesCreate}
        edit={StatusesEdit}
        icon={FormatListBulletedIcon}
        options={{ label: "Statuses dictionary" }}
      />,
      <Resource
        key="instances"
        name="instances"
        list={InstancesList}
        create={InstancesCreate}
        edit={InstancesEdit}
        show={InstancesShow}
        icon={DvrIcon}
      />,
      <Resource
        key="instanceservices"
        name="instanceservices"
        //list={InstanceserviceList}
        create={InstanceserviceCreate}
      />,
      <Resource key="12" name="queues" list={QueueList} />
    ]}
  </Admin>
);

export default App;
