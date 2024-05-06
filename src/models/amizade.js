class Amizade {
    constructor({ id, amigos }) {
        this.id = id || -1;
        this.amigos = amigos || [];
    }
  
    adicionarAmigo(amigoId) {
        if (!this.amigos.includes(amigoId)) {
            this.amigos.push(amigoId);
        }
    }
  
    removerAmigo(amigoId) {
        const index = this.amigos.indexOf(amigoId);
        if (index !== -1) {
            this.amigos.splice(index, 1);
        }
    }

    listarAmigosPorIdJogador(jogadorId) {
        return this.amigos.filter(id => id === jogadorId);
    }
}

module.exports = Amizade;
