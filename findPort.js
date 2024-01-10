const { error } = require("node:console");
const net = require("node:net");

function findPort(DesiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.listen(DesiredPort, () => {
      const { port } = server.address();
      server.close(() => {
        resolve(port);
      });
    });
    server.on("error", () => {
      if (error.code === "EADDRINUSE") {
        resolve(findPort(0).then((port) => resolve(port)));
      } else {
        reject(error);
      }
    });
  });
}

module.exports = { findPort };
