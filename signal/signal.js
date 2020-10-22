const http = require("http");
const host = "localhost";
const port = 8001;
const Sequelize = require("sequelize");
const DB_USER = "postgres";
const DB_PASS = null;
const DB_HOST = "postgres";
const DB_PORT = 5432;

const db = new Sequelize(
    `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}`,
    {
        logging: false,
    }
);

const server = http.createServer(function (req, res) {
    console.log("new request to SIGNAL API");

    res.writeHead(200);
    res.end("SIGNAL API");
});

server.listen(port, async () => {
    console.log(`SIGNAL Server is running on http://${host}:${port}`);
    try {
        await db.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.log(error);
    }
});
