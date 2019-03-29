import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { submit, isSubmitting } from "redux-form";
import {
  fetchEnd,
  fetchStart,
  required,
  showNotification,
  Button,
  SaveButton,
  SimpleForm,
  TextInput,
  CREATE,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  NumberInput
} from "react-admin";
import IconContentAdd from "@material-ui/icons/Add";
import IconCancel from "@material-ui/icons/Cancel";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import { dataProvider } from "../../App";

class CreateServiceButton extends Component {
  state = {
    error: false,
    showDialog: false
  };

  handleClick = () => {
    this.setState({ showDialog: true });
  };

  handleCloseClick = () => {
    this.setState({ showDialog: false });
  };

  handleSaveClick = () => {
    const { submit } = this.props;
    submit("service-quick-create");
  };

  handleSubmit = values => {
    const { fetchStart, fetchEnd, showNotification, id } = this.props;

    fetchStart();

    //create service
    dataProvider(CREATE, "services", { data: values })
      .then(({ data }) => {
        //create connection between new service and instance
        dataProvider(CREATE, "instanceservices", {
          data: { serviceId: data.id, instanceId: id }
        })
          //reload page (get new list of assigned services)
          .then(() => window.location.reload());
        this.setState({ showDialog: false });
      })
      .catch(error => {
        showNotification(error.message, "error");
      })
      .finally(() => {
        fetchEnd();
      });
  };

  render() {
    const { showDialog } = this.state;
    const { isSubmitting } = this.props;

    return (
      <Fragment>
        <Button onClick={this.handleClick} label="Create and assign service">
          <IconContentAdd />
        </Button>
        <Dialog
          fullWidth
          open={showDialog}
          onClose={this.handleCloseClick}
          aria-label="Create service"
        >
          <DialogTitle>Create service</DialogTitle>
          <DialogContent>
            <SimpleForm
              form="service-quick-create"
              resource="service"
              onSubmit={this.handleSubmit}
              toolbar={null}
            >
              <ReferenceInput
                label="Server"
                source="serverId"
                reference="servers"
                validate={required()}
              >
                <SelectInput optionText="name" />
              </ReferenceInput>

              <ReferenceInput
                label="Service type"
                source="serviceTypeId"
                reference="servicetypes"
                validate={required()}
              >
                <SelectInput optionText="name" />
              </ReferenceInput>
              <TextInput source="description" resettable />
              <NumberInput source="port" validate={required()} />
              <BooleanInput source="toRestart" defaultValue={false} />
              <ReferenceInput
                label="Status"
                source="statusId"
                reference="statuses"
              >
                <SelectInput optionText="name" />
              </ReferenceInput>
            </SimpleForm>
          </DialogContent>
          <DialogActions>
            <SaveButton saving={isSubmitting} onClick={this.handleSaveClick} />
            <Button label="ra.action.cancel" onClick={this.handleCloseClick}>
              <IconCancel />
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isSubmitting: isSubmitting("service-quick-create")(state)
});

const mapDispatchToProps = {
  fetchEnd,
  fetchStart,
  showNotification,
  submit
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateServiceButton);
