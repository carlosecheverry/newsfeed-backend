const { Articles } = require("../models/Articles");
const bcrypt = require("bcrypt");

module.exports = {
  create: (body) => {
    const newArticle = new Articles(body);
    return newArticle.save();
  },
  find: () => Articles.find({ is_active: true }),
  findById: (id) => Articles.findById(id),
  update: (article, body) => {
    Object.assign(article, body);
    return article.save();
  },
};
