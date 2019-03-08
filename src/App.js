import React from "react";
import { Admin, Resource } from "react-admin";
import Dashboard from "./Dashboard/Dashboard";
import UserIcon from "@material-ui/icons/Group";
import loopbackClient, { authProvider } from "react-admin-loopback";
import { UsersList, UsersCreate, UsersEdit } from "./Users/Users";

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
  </Admin>
);

export default App;
