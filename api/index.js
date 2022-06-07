const express = require("express");
const app = express();

require("./startup/routes")(app);

const port = process.env.PORT || 3001;
const server = app.listen(port, () => console.log(`Listening on ${port}...`));

module.exports = server;
