const mensagemElemento = document.getElementById("mensagem");
const botaoMensagem = document.getElementById("botaoMensagem");

const coresAnimadas = ["red", "blue", "green", "purple", "orange", "pink"];
let corAtual = 0;
let animacaoAtiva = null;

botaoMensagem.addEventListener("click", () => {
  mensagemElemento.innerText =
    "Você é incrível! Continue acreditando nos seus sonhos! ✨";

  if (animacaoAtiva === null) {
    animacaoAtiva = setInterval(() => {
      mensagemElemento.style.color = coresAnimadas[corAtual];
      corAtual = (corAtual + 1) % coresAnimadas.length;
    }, 500);
  }
});
