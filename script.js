import {aleatorio} from `./aleatorio.js`;
import {perguntas} from `./perguntas.js`;
import {nomes} from './aleatorio.js';

const botaoJogarNovamente = document.querySelector(".novamente-btn");
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultados");
const nome = aleatorio(nomes);
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

botaoIniciar.addEventListener('click', iniciaJogo);

let atual = 0;
let perguntaAtual;

function mostrarPergunta() {
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function() {
            atual++;
            mostrarPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

export function aleatorio (lista){
    const posicao = Math.floot(Math.random()* lista.length);
    return lista[posicao];
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
historiaFinal += afirmacoes + " ";
atual++;
}

function mostraResultado() {
caixaPerguntas.textContent = `Em 2049, ${nome}`;
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
caixaResultado.classList.add("mostrar"); botaoJogarNovamente.addEventListener("click", jogaNovamente());
}

function jogaNovamente(){
    atual = 0;
    historiaFinal = "";
}

function substituiNome(){
for(const pergunta of perguntas){
pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}

mostrarPergunta();


function respostaSelecionada(opcaoSelecionada) { 

  const afirmacoes = aleatorio(opcaoSelecionada.afirmacao); 

  historiaFinal += afirmacoes + " "; 

  if (opcaoSelecionada.proxima !== undefined) { 

    atual = opcaoSelecionada.proxima; 

  } else { 

    mostraResultado(); 

    return; 

  } 

  mostrarPergunta(); 

} 

function iniciaJogo() {
atual = 0;
historiaFinal = "";
telaInicial.style.display = 'none';
caixaPerguntas.classList.remove("mostrar");
caixaAlternativas.classList.remove("mostrar");
caixaResultado.classList.remove("mostrar");
mostrarPergunta();
}

substituiNome();