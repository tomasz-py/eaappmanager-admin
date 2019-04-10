import React from "react";
import { Button, refreshView } from "react-admin";
import RefreshIcon from "@material-ui/icons/Refresh";
import { dataProvider } from "../../App";
import { CREATE, UPDATE } from "react-admin";
import { connect } from "react-redux";

const ConditionalRestartButton = ({
  record,
  resource,
  push,
  onClick,
  refreshView,
  ...rest
}) => {
  console.log(refreshView);
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
      .then(() => refreshView())
      .catch(e => console.log(e));
  };

  return record.toRestart && record.statusId !== 5 ? (
    <Button label="Restart" onClick={onClickHandler}>
      <RefreshIcon />
    </Button>
  ) : null;
};

export default connect(
  null,
  { refreshView }
)(ConditionalRestartButton);
//export default ConditionalRestartButton;
