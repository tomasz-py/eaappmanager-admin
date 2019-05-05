import React from "react";
import { Admin, Resource } from "react-admin";
import Dashboard from "./Dashboard/Dashboard";
import loopbackClient from "react-admin-loopback";
import { authProvider } from "./authProvider/authProvider";
import clients from "./Resources/Clients";
import appusers from "./Resources/Appusers";
import addresses from "./Resources/Addresses";
import subscriptions from "./Resources/Subscriptions";
import { adminServers, userServers } from "./Resources/Servers";
import { adminServices, userServices } from "./Resources/Services";
import { adminServiceTypes, userServiceTypes } from "./Resources/ServiceTypes";
import serverdetails from "./Resources/ServerDetails";
import { adminStatuses, userStatuses } from "./Resources/Statuses";
import { adminInstances, userInstances } from "./Resources/Instances";
import instanceservices from "./Resources/InstanceServices";
import queues from "./Resources/Queues";
import config from "./config";

//export const dataProvider = loopbackClient("http://localhost:3000/api/");
export const dataProvider = loopbackClient(
  `${config.api.protocol}://${config.api.hostName}:${config.api.port}/api/`
);

const App = () => {
  return (
    <Admin
      dashboard={Dashboard}
      dataProvider={dataProvider}
      //authProvider={authProvider("http://localhost:3000/api/appusers/login")}
      authProvider={authProvider(
        `${config.api.protocol}://${config.api.hostName}:${
          config.api.port
        }/api/appusers/login`
      )}
    >
      {permissions => [
        permissions === "admin" ? (
          <Resource name="appusers" {...appusers} />
        ) : null,
        <Resource name="clients" {...clients} />,
        <Resource name="addresses" {...addresses} />,
        <Resource name="subscriptions" {...subscriptions} />,
        permissions === "admin" ? (
          <Resource name="servers" {...adminServers} />
        ) : (
          <Resource name="servers" {...userServers} />
        ),

        permissions === "admin" ? (
          <Resource name="services" {...adminServices} />
        ) : (
          <Resource name="services" {...userServices} />
        ),

        permissions === "admin" ? (
          <Resource name="servicetypes" {...adminServiceTypes} />
        ) : (
          <Resource name="servicetypes" {...userServiceTypes} />
        ),

        <Resource name="serversdetails" {...serverdetails} />,
        permissions === "admin" ? (
          <Resource name="statuses" {...adminStatuses} />
        ) : (
          <Resource name="statuses" {...userStatuses} />
        ),
        permissions === "admin" ? (
          <Resource name="instances" {...adminInstances} />
        ) : (
          <Resource name="instances" {...userInstances} />
        ),

        <Resource name="instanceservices" {...instanceservices} />,
        <Resource name="queues" {...queues} />
      ]}
    </Admin>
  );
};

export default App;
