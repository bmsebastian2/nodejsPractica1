const http = require("node:http");

const server = http.createServer((req, resp) => {
  console.log("request");
  resp.end(`Hola desde vercel en el puerto, ${server.address().port}`);
});

server.listen(3000, () => {
  console.log("escuchando puesrto 3000");
});
