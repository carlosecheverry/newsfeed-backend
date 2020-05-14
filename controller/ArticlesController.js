const { UsersService, ArticlesService } = require('../services');

module.exports = {
  create: async (req, res) => {
    try {
      const article = await ArticlesService.create(req.body);
      res.status(201).send(article)
    } catch (err) {
      res.status(400).send({ message: 'Error creating article', err }); 
    }
  },
  find: async (req, res) => {
    try {
      const articles = await ArticlesService.find();
      res.status(200).send(articles)
    } catch (err) {
      res.status(404).send({ message: 'Articles not found', err });
    }
  },
  findById: async (req, res) => {
    const { id } = req.params;
    try {
      const article = await ArticlesService.findById(id);
      res.status(200).send(article)
    } catch (err) {
      res.status(404).send({ message: 'Article not found', err });
    }
  },
  findByIdAndUpdate: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const article = await ArticlesService.findById(id);
      const updatedArticle = await ArticlesService.update(article, body);
      res.status(200).send(updatedArticle)
    } catch (err) {
      res.status(404).send({ message: 'Article not found', err });
    }
  },
  findByIdAndDelete: async (req, res) => {
    const { id } = req.params;
    try {
      const article = await ArticlesService.findById(id);
      await ArticlesService.update(article, { is_active: false });
      res.status(204).send();
    } catch (err) {
      res.status(404).send({ message: 'Error deleting article', err });
    }
  },
}