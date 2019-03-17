import React, { useState, useEffect } from "react";
import { GET_LIST, Button } from "react-admin";
import { dataProvider } from "../../App";
import InstanceServicesTable from "./InstanceServicesTable";

// const dataProvider = loopbackClient("http://localhost:3000/api/");

const InstanceServices = props => {
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
  const checkState = () => {
    console.log(services.data);
    console.log(props);
  };

  if (services.length !== 0) {
    return <InstanceServicesTable services={services} />;
  } else {
    return <div />;
  }

  //   return (
  //     <div>
  //       <Button label="Console Log state" onClick={checkState} />
  //       <div />
  //     </div>
  //   );

  //   return (
  //     <div>
  //       {/* <Button label="Console Log state" onClick={getData} /> */}
  //       />
  //     </div>
  //   );
};

export default InstanceServices;

//   handleClick = () => {
//     const { push, record, showNotification } = this.props;
//     const updatedRecord = { ...record, is_approved: true };
//     -fetch(`/comments/${record.id}`, { method: "PUT", body: updatedRecord }) +
//       dataProvider(UPDATE, "comments", { id: record.id, data: updatedRecord })
//         .then(() => {
//           showNotification("Comment approved");
//           push("/comments");
//         })
//         .catch(e => {
//           showNotification("Error: comment not approved", "warning");
//         });
//   };
