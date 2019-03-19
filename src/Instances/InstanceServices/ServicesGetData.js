import React, { useState, useEffect } from "react";
import { GET_LIST } from "react-admin";
import { dataProvider } from "../../App";
import ServicesTable from "./ServicesTable";
import { parse } from "query-string";

const ServicesGetData = props => {
  const [services, setServices] = useState([]);
  const [assignedServices, setassignedServices] = useState([]);

  const { instanceId: instanceId_string } = parse(props.search);
  const instanceId = instanceId_string ? parseInt(instanceId_string, 10) : "";

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    //Get list of all services
    dataProvider(GET_LIST, "services", {
      filter: {},
      sort: { field: "id", order: "DESC" },
      pagination: { page: 1, perPage: 10 },
      include: [
        { relation: "server" },
        { relation: "servicetype" },
        { relation: "status" }
      ]
    })
      .then(response => {
        setServices(response);
      })
      .catch(e => console.log(e));

    //Get id's of already assigned services to provided instanceId
    dataProvider(GET_LIST, "instanceservices", {
      filter: { instanceId: instanceId },
      sort: { field: "id", order: "DESC" },
      pagination: {}
    })
      .then(response => {
        setassignedServices(response.data);
      })
      .catch(e => console.log(e));
  };

  if (services.length !== 0 && assignedServices.length !== 0) {
    return (
      <ServicesTable
        services={services}
        instanceId={instanceId}
        assignedServices={assignedServices}
      />
    );
  } else {
    return <div />;
  }
};

export default ServicesGetData;
