const Mensagem = require("../models/mensagem");
const MensagemDAO = require('../models/dao/mensagemDAO');

class MensagemController {
  // Cria uma nova mensagem (CREATE)
  create(req, res) {
    let texto = req.body.texto;
    let remetenteId = req.body.remetenteId;
    let destinatarioId = req.body.destinatarioId;
    
    // Obtém a data e hora atual
    let dataHoraAtual = new Date().toISOString();

    let mensagem = new Mensagem({ texto, dataHora: dataHoraAtual, remetenteId, destinatarioId });
    let mensagemId = MensagemDAO.criar(mensagem);

    // Faz o response para o navegador
    if (mensagemId)
      res.status(201).json({ mensagem: MensagemDAO.buscarPorId(mensagemId) });
    else
      res.status(500).json({ message: "Não foi possível criar uma mensagem" });
  }

  // Lista todas as mensagens (READ)
  list(req, res) {
    let listaMensagens = MensagemDAO.listar();

    // Faz o response para o navegador
    if (listaMensagens.length === 0)
      res.status(200).json({ message: "Nenhuma mensagem encontrada" });
    else
      res.status(200).json({ mensagens: listaMensagens });
  }

  // Mostra uma mensagem pelo ID (READ)
  show(req, res) {
    let id = req.params.id;
    let mensagem = MensagemDAO.buscarPorId(parseInt(id));

    // Faz o response para o navegador
    if (mensagem)
      res.status(200).json({ mensagem: mensagem });
    else
      res.status(404).json({ message: 'Mensagem não encontrada' });
  }

  // Atualiza uma mensagem (UPDATE)
  update(req, res) {
    let id = req.params.id;
    let mensagem = MensagemDAO.buscarPorId(parseInt(id));
    
    // Se a mensagem existir
    if (mensagem) {
      // Atualiza os campos, se fornecidos
      if (req.body.texto) mensagem.texto = req.body.texto;

      // Atualiza a mensagem na persistência
      MensagemDAO.atualizar(id, mensagem);

      // Faz o response para o navegador
      res.status(200).json({ mensagem: mensagem });
    } else {
      // Se a mensagem não existir, retorna erro 404
      res.status(404).json({ message: 'Mensagem não encontrada' });
    }
  }

  // Deleta uma mensagem (DELETE)
  delete(req, res) {
    let id = parseInt(req.params.id);

    // Verifica se a mensagem existe
    if (MensagemDAO.exist(id)) {
      // Deleta a mensagem
      MensagemDAO.deletar(id);

      // Faz o response para o navegador
      res.status(200).send();
    } else {
      // Se a mensagem não existir, retorna erro 404
      res.status(404).json({ message: 'Mensagem não encontrada' });
    }
  }
}

module.exports = new MensagemController();
