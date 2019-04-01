import DvrIcon from "@material-ui/icons/Dvr";
import {
  InstancesList,
  InstancesCreate,
  InstancesEdit,
  InstancesShow
} from "../Instances/Instances";

export default {
  key: "instances",
  name: "instances",
  list: InstancesList,
  create: InstancesCreate,
  edit: InstancesEdit,
  show: InstancesShow,
  icon: DvrIcon
};
