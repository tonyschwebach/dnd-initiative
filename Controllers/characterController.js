const db = require("../Models");

module.exports = {
  findAll: function (req, res) {
    db.Character.find(req.query)
      .then((dbCharacters) => res.json(dbCharacters))
      .catch((err) => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.Character.findById(req.params.id)
      .then((dbCharacter) => res.json(dbCharacter))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    db.Character.create({ ...req.body })
      .then((dbCharacter) => res.json(dbCharacter))
      .catch((err) => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Character.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    )
      .then((dbCharacter) => res.json(dbCharacter))
      .catch((err) => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.Character.findByIdAndRemove(req.params.id)
      .then((dbCharacter) => res.json(dbCharacter))
      .catch((err) => res.status(422).json(err));
  },
};
