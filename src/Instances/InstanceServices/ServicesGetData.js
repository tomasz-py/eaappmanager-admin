import React, { useState, useEffect } from "react";
import { GET_LIST } from "react-admin";
import { dataProvider } from "../../App";
import ServicesTable from "./ServicesTable";

const ServicesGetData = props => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
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
  };

  if (services.length !== 0) {
    return <ServicesTable services={services} search={props.search} />;
  } else {
    return <div />;
  }
};

export default ServicesGetData;
