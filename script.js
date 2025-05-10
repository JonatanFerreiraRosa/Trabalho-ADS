const mensagem = document.getElementById("mensagem");
const botao = document.getElementById("botaoMensagem");
const cores = ["red", "blue", "green", "purple", "orange", "pink"];
let indice = 0;
let intervalo = null;

botao.addEventListener("click", function () {
  mensagem.innerText =
    "Você é incrível! Continue acreditando nos seus sonhos! ✨";

  if (intervalo === null) {
    intervalo = setInterval(() => {
      mensagem.style.color = cores[indice];
      indice = (indice + 1) % cores.length;
    }, 500);
  }
});
