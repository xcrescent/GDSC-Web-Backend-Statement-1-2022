const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const formController = require("../controllers/form");

let routes = app => {
    router.get("/", homeController.getHome);
    
    
    router.post("/multiple-upload", formController.multipleUpload);

    return app.use("/", router);
};

module.exports = routes;