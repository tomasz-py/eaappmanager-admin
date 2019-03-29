import React, { useState, useEffect } from "react";
import { GET_LIST } from "react-admin";
import { dataProvider } from "../../App";
//import InstanceServicesTable from "./InstanceServicesTable";
import InstanceServicesTable from "./InstanceServiceTable";
// const dataProvider = loopbackClient("http://localhost:3000/api/");

const InstanceServicesGetData = props => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dataProvider(GET_LIST, "instances", {
      filter: { id: props.id },
      sort: { field: "id", order: "DESC" },
      pagination: { page: 1, perPage: 10 },
      include: [
        {
          relation: "service",
          scope: {
            include: [
              { relation: "server" },
              { relation: "servicetype" },
              { relation: "status" }
            ]
          }
        }
      ]
    })
      .then(response => {
        setServices(response);
      })
      .catch(e => console.log(e));
  };

  if (services.length !== 0) {
    return <InstanceServicesTable services={services} />;
  } else {
    return <div />;
  }
};

export default InstanceServicesGetData;
