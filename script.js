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

let atual = 0; 
let perguntaAtual; 
let historiaFinal = ""; 
let pontos = 0;  

function mostraPergunta(){ 
    perguntaAtual = perguntas[atual]; 
    caixaPerguntas.textContent = perguntaAtual.enunciado; 
    caixaAlternativas.textContent = ""; 
    mostraAlternativas(); 
}

function mostraAlternativas(){ 
    for(const alternativa of perguntaAtual.alternativas){ 
        const botaoAlternativas = document.createElement("button"); 
        botaoAlternativas.textContent = alternativa.texto; 
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)); 
        caixaAlternativas.appendChild(botaoAlternativas); 
    }
}

function respostaSelecionada(alternativa) { 
    const afirmacao = alternativa.afirmacao; 
    historiaFinal = afirmacao; 
    pontos += alternativa.pontos;  
    atual++; 

    if (atual < perguntas.length) { 
        mostraPergunta();  
    } else {
        exibeResultado();  
    }
}

function exibeResultado() { 
    caixaPerguntas.textContent = "Fim do Quiz!"; 
    caixaAlternativas.textContent = "";  
    textoResultado.textContent = `Sua pontuação final é: ${pontos} pontos.`; 

    if (pontos === perguntas.length) { 
        textoResultado.textContent += " Parabéns! Você acertou todas as questões!"; 
    } else if (pontos > perguntas.length / 2) { 
        textoResultado.textContent += " Bom trabalho, você teve um desempenho legal!"; 
    } else { 
        textoResultado.textContent += " Você pode melhorar! Tente novamente!"; 
    }
}

mostraPergunta();