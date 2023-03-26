// Imports
const express = require("express");
const app = express();
const routes = require("./src/routes");

// Setting up the middlewares
app.use(express.json());
app.use(routes);

// Listening to the server
const PORT = process.env.PORT || 8008;
app.listen(PORT, () => {
    console.log(`>> Listening to the server at : http://localhost:${PORT}`);
});
