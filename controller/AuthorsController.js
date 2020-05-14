const { UsersService, AuthorsService } = require('../services');

module.exports = {
  create: async (req, res) => {
    try {
      const author = await AuthorsService.create(req.body);
      res.status(201).send(author)
    } catch (err) {
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
}