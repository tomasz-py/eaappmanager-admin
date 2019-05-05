import DvrIcon from "@material-ui/icons/Dvr";
import {
  InstancesList,
  InstancesCreate,
  InstancesEdit,
  InstancesShow
} from "../Instances/Instances";

export const adminInstances = {
  key: "instances",
  name: "instances",
  list: InstancesList,
  create: InstancesCreate,
  edit: InstancesEdit,
  show: InstancesShow,
  icon: DvrIcon
};

export const userInstances = {
  key: "instances",
  name: "instances",
  list: InstancesList,
  show: InstancesShow,
  icon: DvrIcon
};
