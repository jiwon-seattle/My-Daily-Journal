
// db controller
const db = require('../models');
const Journal = db.heroku_56vg5r9ks;

exports.post = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message : "Content can not be empty"});
    return;
  }
  const journal = new Journal({
    date: req.body.date,
    weather: req.body.weather,
    feelings: req.body.feelings,
  });

  journal
    .save(journal)
    .then(data=> {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occured."
      });
    });
};

exports.findAll = (req, res) => {
  Journal.find({})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Error occured."
    });
  });
};

