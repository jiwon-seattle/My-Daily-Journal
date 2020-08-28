module.exports = app => {
  const controllers = require('../controllers/controller');

  const router = require("express").Router();

  router.post("/", controllers.post);
  router.get("/", controllers.findAll);

  app.use('/weather', router);
};


