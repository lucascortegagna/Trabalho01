const mensagem = require("../mensagem")


let mensagens = [
    new mensagem({ id: 1, texto: "Bora jogar Rocket League?", remetente: 1, destinatario: 2 }),
    new mensagem({ id: 2, texto: "Vamos jogar uma partida agora?", remetente: 2, destinatario: 1 }),
    new mensagem({ id: 3, texto: "Você consegue jogar de sentinela?", remetente: 3, destinatario: 4 }),
    new mensagem({ id: 4, texto: "Qual é o seu mono agente no Valorant?", remetente: 4, destinatario: 3 }),
    new mensagem({ id: 5, texto: "Vou praticar no The Range.", remetente: 5, destinatario: 6 }),
    new mensagem({ id: 6, texto: "Olha o novo mapa do Fortnite.", remetente: 6, destinatario: 5 }),
    new mensagem({ id: 7, texto: "Vamos jogar Tibia?", remetente: 7, destinatario: 8 }),
    new mensagem({ id: 8, texto: "Hoje tem Loud x Sentinels!!!", remetente: 8, destinatario: 7 }),
    new mensagem({ id: 9, texto: "Vamos jogar um campeonato de CS:GO?", remetente: 9, destinatario: 10 }),
    new mensagem({ id: 10, texto: "VEM X1 no FPS chess.", remetente: 10, destinatario: 9 }),
    new mensagem({ id: 11, texto: "Um dia vamos terminar de zerar o baldurs gate III.", remetente: 11, destinatario: 12 }),
    new mensagem({ id: 12, texto: "Partiu jogar Apex Legends.", remetente: 12, destinatario: 11 }),
    new mensagem({ id: 13, texto: "Você joga de Suporte ou ADC?", remetente: 13, destinatario: 14 }),
    new mensagem({ id: 14, texto: "Qual seu personagem favorito do lol?", remetente: 14, destinatario: 13 }),
    new mensagem({ id: 15, texto: "Assista Arcane na Netflix!", remetente: 15, destinatario: 16 }),
    new mensagem({ id: 16, texto: "Vamos virar!", remetente: 16, destinatario: 15 }),
    new mensagem({ id: 17, texto: "Rusha A", remetente: 17, destinatario: 18 }),
    new mensagem({ id: 18, texto: "Rusha B.", remetente: 18, destinatario: 17 }),
    new mensagem({ id: 19, texto: "Rusha C", remetente: 19, destinatario: 20 }),
    new mensagem({ id: 20, texto: "gg", remetente: 20, destinatario: 19 })


];

class MensagemDAO {
    // Método para criar uma nova mensagem
    criar(mensagem) {
        mensagem.id = mensagens.length + 1;
        mensagem.dataHora = new Date(); //Data e hora atual
        mensagens.push(mensagem);
        return mensagem.id;
    }
    //Lista as mensagens
    listar() {
        return mensagens;
    }
    // Busca a mensagem pela sua ID
    buscarPorId(id) {
        return mensagens.find(mensagem => mensagem.id === id);
    }
    // Atualiza a mensagem pela sua id
    atualizar(id, mensagemAtualizada) {
        const index = mensagens.findIndex(mensagem => mensagem.id === id);
        if (index !== -1) {
            mensagens[index] = mensagemAtualizada;
        }
    }
    // Deleta a mensagem
    deletar(id) {
        const index = mensagens.findIndex(mensagem => mensagem.id === id);
        if (index !== -1) {
            mensagens.splice(index, 1);
        }
    }
}

module.exports = new MensagemDAO();
