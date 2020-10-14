const { DataGame } = require('../models');

class Controller {
  static create(req, res) {
    const { mdate, stadium, team1, team2 } = req.body;
    const newDataGame = { mdate, stadium, team1, team2 };

    DataGame.create(newDataGame)
      .then((data) => {
        res.status(201).json(data);
      }).catch((err) => {
        console.log(err);
      });
  }

  static findAll(req, res) {
    DataGame.findAll()
      .then((data) => {
        res.status(200).json(data);
      }).catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Controller;