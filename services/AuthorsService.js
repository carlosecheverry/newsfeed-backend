const { Authors } = require('../models/Authors');
const bcrypt = require('bcrypt');

module.exports = {
  create: (body) => {
    const newAuthor = new Authors(body);
    return newAuthor.save();
  },
  find: () => Authors.find({ is_active: true }),
  findById: (id) => Authors.findById(id),
  update: (author, body) => {
    Object.assign(author, body);
    return author.save();
  },
}
