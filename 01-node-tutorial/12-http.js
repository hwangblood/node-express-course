const http = require("http");

const server = http.createServer((req, res) => {
  res.write("welcome to our home page");
  res.end();
});

server.listen(5000);

// open http://localhost:500 on browser to see this app
