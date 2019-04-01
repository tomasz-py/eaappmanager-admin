import React from "react";
import { Admin, Resource } from "react-admin";
import Dashboard from "./Dashboard/Dashboard";
import loopbackClient from "react-admin-loopback";
import { authProvider } from "./authProvider/authProvider";
import clients from "./Resources/Clients";
import appusers from "./Resources/Appusers";
import addresses from "./Resources/Addresses";
import subscriptions from "./Resources/Subscriptions";
import servers from "./Resources/Servers";
import services from "./Resources/Services";
import servicetypes from "./Resources/ServiceTypes";
import serverdetails from "./Resources/ServerDetails";
import statuses from "./Resources/Statuses";
import instances from "./Resources/Instances";
import instanceservices from "./Resources/InstanceServices";
import queues from "./Resources/Queues";

export const dataProvider = loopbackClient("http://localhost:3000/api/");

const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider("http://localhost:3000/api/appusers/login")}
  >
    {permissions => [
      permissions === "admin" ? (
        <Resource name="appusers" {...appusers} />
      ) : null,
      <Resource name="clients" {...clients} />,
      <Resource name="addresses" {...addresses} />,
      <Resource name="subscriptions" {...subscriptions} />,
      <Resource name="servers" {...servers} />,
      <Resource name="services" {...services} />,
      <Resource name="servicetypes" {...servicetypes} />,
      <Resource name="serversdetails" {...serverdetails} />,
      <Resource name="statuses" {...statuses} />,
      <Resource name="instances" {...instances} />,
      <Resource name="instanceservices" {...instanceservices} />,
      <Resource name="queues" {...queues} />
    ]}
  </Admin>
);

export default App;
