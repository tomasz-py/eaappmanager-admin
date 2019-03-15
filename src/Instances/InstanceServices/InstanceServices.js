import React, { Component } from "react";
import { Button, GET_LIST } from "react-admin";
import { dataProvider } from "../../App";

// const dataProvider = loopbackClient("http://localhost:3000/api/");

class InstanceServices extends Component {
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

  test = () => {
    console.log();
    dataProvider(
      GET_LIST,
      "instances",

      {
        filter: { id: this.props.id },
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
          },
          {
            relation: "client"
          },
          {
            relation: "status"
          }
        ]
      }
    ).then(response => {
      console.log(response);
    });
  };

  render() {
    return (
      <div>
        <Button label="test" onClick={this.test} />
      </div>
    );
  }
}

export default InstanceServices;
