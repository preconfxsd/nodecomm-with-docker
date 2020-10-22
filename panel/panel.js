const http = require("http");
const host = "localhost";
const port = 8000;

const server = http.createServer(function (req, res) {
    console.log("new request to PANEL API");
    res.writeHead(200);
    res.end("PANEL API");
});
server.listen(port, () => {
    console.log(`PANEL Server is running on http://${host}:${port}`);
});
