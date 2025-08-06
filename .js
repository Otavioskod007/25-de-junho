const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector("caixa-perguntas");
const caixaAlternativas = document.querySelector("caixa-alternativas");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");

const perguntas = [
    {
        enunciado:"Qual a maior carta do truco, sem ser a manilha?",
        alternativas: [
            { 
                texto:"3",
                afirmação:"resposta correta",
                pontuação:1
            },
            { 
                texto:"4",
                afirmação:"resposta errada",
                pontuação:0
            }
        ]
    },
        {
       
           enunciado:"Quantos jogadores são necessários para o truco?",
           alternativas:[
            { 
                texto:"3",
                afirmação:"resposta errada",
                pontuação:0
            },
            { 
                texto:"4",
                afirmação:"resposta correta",
                pontuação:1
            }
        ]
    },

    {
        enunciado:"Com quantos pontos vence a partida de truco?",
        alternativas: [
            { 
                texto:"12",
                afirmação:"resposta correta",
                pontuação:1
            },
            { 
                texto:"20",
                afirmação:"resposta errada",
                pontuação:0,
            }
        ]
    },
     {
        enunciado:"Quantas cartas os jogadores recebem?",
        alternativas: [
            { 
                texto:"5",
                afirmação:"resposta errada",
                pontuação:0
            },
            { 
                texto:"3",
                afirmação:"resposta correta",
                pontuação:1
            }
        ]
    },
     {
        enunciado:"Como se fala qual carta tem, para seu parceiro?",
        alternativas: [
            { 
                texto:"fala para ele",
                afirmação:"resposta errada",
                pontuação:0
            },
            { 
                texto:"atravéz de sinais",
                afirmação:"resposta correta",
                pontuação:1
            }
        ]
    },
    
]