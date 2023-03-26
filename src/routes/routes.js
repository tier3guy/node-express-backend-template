const routes = require("express").Router();

routes.get("/", async (req, res) => {
    res.status(200).json({
        message: "Hey, we are live !",
        status: "OK",
        statusCode: 200,
    });
});

module.exports = routes;
