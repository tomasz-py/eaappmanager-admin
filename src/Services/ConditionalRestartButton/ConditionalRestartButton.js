import React from "react";
import { Button, RefreshButton } from "react-admin";
import RefreshIcon from "@material-ui/icons/Refresh";
import { dataProvider } from "../../App";
import { CREATE, UPDATE } from "react-admin";
// import { Link } from "react-router-dom";
// import { push as pushAction } from "react-router-redux";

const ConditionalRestartButton = ({ record, resource, ...rest }) => {
  const onClickHandler = () => {
    dataProvider(CREATE, "queues", {
      data: {
        tableName: "service",
        itemId: record.id,
        statusId: 3,
        action: "Restart"
      }
    })
      .then(
        dataProvider(UPDATE, "services", {
          id: record.id,
          data: {
            statusId: 5
          }
        })
      )
      .then(() => window.location.reload())
      .catch(e => console.log(e));
  };

  return record.toRestart && record.statusId !== 5 ? (
    <Button label="Restart" onClick={onClickHandler}>
      <RefreshIcon />
    </Button>
  ) : null;
};
export default ConditionalRestartButton;

// <RefreshButton
//   resource={resource}
//   label="Restart"
//   //onClick={onClickHandler}
// />
