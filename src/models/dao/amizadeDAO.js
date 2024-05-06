const Amizade = require("../amizade");

class AmizadeDAO {
  constructor() {
    this.amizades = [];
  }

  listar() {
    return this.amizades;
  }

  buscarPorId(id) {
    return this.amizades.find(amizade => amizade.id === id);
  }

  exist(id) {
    return this.buscarPorId(id) !== undefined;
  }

  criar(amizade) {
    amizade.id = this.amizades.length + 1;
    this.amizades.push(amizade);
    return amizade.id;
  }

  deletar(id) {
    this.amizades = this.amizades.filter(amizade => amizade.id !== id);
  }
}

module.exports = new AmizadeDAO();
