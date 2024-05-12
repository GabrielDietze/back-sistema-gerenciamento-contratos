const Usuario = require('../models/Usuario.js');

module.exports = {
  async index(req, res) {
    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).send({ message: 'Usuário não encontrado!' });
    }

    return res.status(200).send({ usuario });
  },

  async indexAll(req, res) {
    const usuarios = await Usuario.findAll();

    if (usuarios.length == 0) {
      return res.status(404).send({ message: 'Nenhum usuário cadastrado!' });
    }

    return res.status(200).send({ usuarios });
  },

  async store(req, res) {
    const { nome, email, tipo, senha } = req.body;

    const usuario = await Usuario.create({ nome, email, tipo, senha });

    return res.status(201).send({
      message: 'Usuário criado com sucesso!',
      usuario
    });
  },

  async update(req, res) {
    const { nome, email, tipo, senha } = req.body;
    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).send({ message: 'Usuário não encontrado!' });
    }

    Usuario.update({ nome, email, tipo, senha }, { where: { id: id } });

    return res.status(200).send({ message: 'Usuário atualizado com sucesso!' });
  },

  async delete(req, res) {
    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).send({ message: 'Usuário não encontrado!' });
    }

    Usuario.destroy({ where: { id: id } });

    return res.status(200).send({ message: 'Usuário deletado com sucesso!' });
  }
}