import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import DBServers from "./Content/DBServers";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = {
  card: {
    marginBottom: 20
  }
};

const Dashboard = props => {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader title="Welcome to EA App Manager" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
      </Card>

      <Card className={classes.card}>
        <CardHeader title="Servers" />
        <CardContent>
          <DBServers />
        </CardContent>
      </Card>
    </div>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
