const { AuthorsService, AuthorsService } = require('../services');

module.exports = {
  create: async (req, res) => {
    try {
      const author = await AuthorsService.create(req.body);
      res.status(201).send(author)
    } catch (err) {
      console.log(err);
        res.status(400).send({ message: 'Error creating author', err }); 
    }
  },
  find: async (req, res) => {
    try {
      const authors = await AuthorsService.find();
      res.status(200).send(authors)
    } catch (err) {
      res.status(404).send({ message: 'Authors not found', err });
    }
  },
  findById: async (req, res) => {
    const { id } = req.params;
    try {
      const author = await AuthorsService.findById(id);
      res.status(200).send(author)
    } catch (err) {
      res.status(404).send({ message: 'Author not found', err });
    }
  },
  findByIdAndUpdate: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const author = await AuthorsService.findById(id);
      const updatedAuthor = await AuthorsService.update(author, body);
      res.status(200).send(updatedAuthor)
    } catch (err) {
      res.status(404).send({ message: 'Author not found', err });
    }
  },
  findByIdAndDelete: async (req, res) => {
    const { id } = req.params;
    try {
      const author = await AuthorsService.findById(id);
      await AuthorsService.update(author, { is_active: false });
      res.status(204).send();
    } catch (err) {
      res.status(404).send({ message: 'Error deleting author', err });
    }
  },

 addArticleToAuthor: async (req, res) => {
    const { id }  = req.params;
    const { idArticle } = req.body;
    try {
      const author = await AuthorsService.findById(id);
      const article = await ArticlesService.findById(idArticle);
      if (!article) res.status(404).send({ message: 'Article not found' });
      const authorHasArticle = await AuthorsService.findArticle(author, article);
      if (authorHasArticle) res.status(200).send({ message: 'Author has this article already' });
      const authorWithArticle = await AuthorsService.addArticle(author, article);
      res.status(201).send(authorWithArticle.populate('articles'));
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: 'Error adding article to author', err }); 
    }
  },
  findAuthorArticles: async (req, res) => {
    const { id }  = req.params;
    try {
      const author = await AuthorsService.findById(id).populate('articles');
      res.status(200).send(author.articles);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: 'Error getting author roles', err }); 
    }
  },
  findAuthorArticleById: async (req, res) => {
    const { idAuthor, idArticle }  = req.params;
    try {
      const author = await AuthorsService.findById(idAuthor);
      const article = await ArticlesService.findById(idArticle);
      if (!article) return res.status(404).send({ message: 'Article not found' });
      const authorArticle = await AuthorsService.findArticle(author, article);
      if (authorArticle) res.status(200).send({ message: 'Author has this article', article: authorArticle });
      res.status(404).send({ message: 'Article in Author not found' });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: 'Error getting author article', err }); 
    }
  },
  deleteAuthorArticleById: async (req, res) => {
    const { idAuthor, idArticle }  = req.params;
    try {
      const author = await AuthorsService.findById(idAuthor);
      const article = await ArticlesService.findById(idArticle);
      if (!article) return res.status(404).send({ message: 'Article not found' });
      const authorHasArticle = await AuthorsService.findArticle(author, article);
      if (!authorHasArticle) res.status(404).send({ message: 'Author is not reading this article' });
      await AuthorsService.deleteArticle(author, article);
      res.status(204).send();
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: 'Error deleting author article', err }); 
    }
  },
}

