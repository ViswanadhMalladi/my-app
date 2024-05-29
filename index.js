const http = require("http");
const port = process.env.PORT || 3000;

const requestHandler = (request, response) => {
  response.end("Hello, Jenkins and Docker!");
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
