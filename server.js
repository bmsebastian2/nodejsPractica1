const http = require("node:http");
const { findPort } = require("./findPort");

const server = http.createServer((req, resp) => {
  console.log("request");
  resp.end(`Hola desde vercel en el puerto, ${server.address().port}`);
});

findPort(3000).then((port) => {
  server.listen(port, () => {
    console.log("escuchando puesrto 3000");
  });
});
