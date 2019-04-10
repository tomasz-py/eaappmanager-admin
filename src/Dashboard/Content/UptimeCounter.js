const UptimeCounter = ({ uptime }) => {
  const moment = require("moment");
  const now = new Date();

  let days = moment(now).diff(uptime, "days");
  let hours = moment(now).diff(uptime, "hours");
  let minutes = moment(now).diff(uptime, "minutes");

  //   var x = new moment(now);
  //   var y = new moment(uptime);
  //   var duration = moment.duration(x.diff(y));

  const minusDays = days * 24;
  const minusHours = hours * 60;

  hours = hours - minusDays;
  minutes = minutes - minusHours;

  const uptimeString =
    "Uptime: " + days + " d " + hours + " h" + minutes + " m";

  return uptimeString;
};

export default UptimeCounter;
