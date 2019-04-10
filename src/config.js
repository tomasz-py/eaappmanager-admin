module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
    hostName: process.env.API_HOSTNAME || "localhost",
    protocol: process.env.API_PROTOCOL || "http"
  }
};
