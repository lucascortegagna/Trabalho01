class Estatisticas {
  constructor({ id, pontuacao, jogosJogados, jogosVencidos, jogosPerdidos }) {
    this.id = id ? id : 0;
    this.pontuacao = pontuacao ? pontuacao : 0;
    this.jogosJogados = jogosJogados ? jogosJogados : 0;
    this.jogosVencidos = jogosVencidos ? jogosVencidos : 0;
    this.jogosPerdidos = jogosPerdidos ? jogosPerdidos : 0;
  }

  calculaEstatisticas() {
    //Soma a quantidade de jogos jogados
    this.jogosJogados = this.jogosPerdidos + this.jogosVencidos
  }

  calculaEstatisticas() {
    // Soma a quantidade de jogos jogados
    this.jogosJogados = this.jogosPerdidos + this.jogosVencidos;

    // Calcula a pontuação baseado nos jogos ganhos e perdidos.
    this.pontuacao = (this.jogosVencidos * 10) - (this.jogosPerdidos * 5);

    // Confirma que a pontuação não seja negativa
    if (this.pontuacao < 0) {
      this.pontuacao = 0;
    }
  }


}


module.exports = Estatisticas
