const express = require("express");
const proxy = require("http-proxy-middleware");
const config = require("./src/config");
const path = require("path");
const chalk = require("chalk");

const app = express();
const port = 8081;
const serverApi = `${config.api.protocol}://${config.api.hostName}:${
  config.api.port
}`;

const publicFolder = path.resolve(__dirname, "build");
console.log(publicFolder);

function onProxyError(proxy) {
  return (err, req, res) => {
    const host = req.headers && req.headers.host;
    console.log(
      chalk.red("Proxy error:") +
        " Could not proxy request " +
        chalk.cyan(req.url) +
        " from " +
        chalk.cyan(host) +
        " to " +
        chalk.cyan(proxy) +
        "."
    );
    console.log(
      "See https://nodejs.org/api/errors.html#errors_common_system_errors for more information (" +
        chalk.cyan(err.code) +
        ")."
    );
    console.log();

    // And immediately send the proper error response to the client.
    // Otherwise, the request will eventually timeout with ERR_EMPTY_RESPONSE on the client side.
    if (res.writeHead && !res.headersSent) {
      res.writeHead(503);
    }
    res.end(
      "Proxy error: Could not proxy request " +
        req.url +
        " from " +
        host +
        " to " +
        proxy +
        " (" +
        err.code +
        ")."
    );
  };
}

const proxyOptions = target => ({
  target,
  changeOrigin: true,
  logLevel: "debug",
  onProxyReq: proxyReq => {
    // Browers may send Origin headers even with same-origin
    // requests. To prevent CORS issues, we have to change
    // the Origin to match the target URL.
    if (proxyReq.getHeader("origin")) {
      proxyReq.setHeader("origin", target);
    }
  },
  context: function(pathname, req) {
    return (
      req.method !== "GET" ||
      (mayProxy(pathname) &&
        req.headers.accept &&
        req.headers.accept.indexOf("text/html") === -1)
    );
  },
  onError: onProxyError(target),
  ws: true,
  xfwd: true
});

app.use("/api", proxy(proxyOptions(`http://${config.api.hostName}:3000`)));

app.use("/", express.static(publicFolder));
app.use("*", express.static(publicFolder));

app.listen(port, () => console.log(`App listening on port ${port}.`));
