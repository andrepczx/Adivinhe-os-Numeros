// Gera um número secreto aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
// Define o número inicial de tentativas
let tentativasRestantes = 15;

// Exibe uma mensagem de aviso por um tempo determinado
function mostrarAviso(mensagem, duracao = 2000) {
  const aviso = document.getElementById("aviso");
  aviso.innerText = mensagem;
  setTimeout(() => {
    aviso.innerText = "";
  }, duracao);
}

// Função chamada ao enviar um palpite
function Palpite() {
  // Obtém o valor do input e converte para número
  const chuteInput = document.getElementById("chute");
  const chute = Number(chuteInput.value);
  chuteInput.value = "";

  // Valida se o palpite está entre 1 e 100
  if (chute < 1 || chute > 100 || isNaN(chute)) {
    mostrarAviso("Por favor, insira um número entre 1 e 100.");
    return;
  }

  // Verifica se acertou o número secreto
  if (chute === numeroSecreto) {
    document.getElementById("resultado").innerText = "Parabéns! Você acertou!";
    document.getElementById("dica").innerText = "";
    document.getElementById("tentativas").innerText = "";
    document.querySelector("button").disabled = true;
    // Redireciona para a página principal após 2,5 segundos
    setTimeout(() => {
      window.location.href = "../../mainpg/index.html";
    }, 2500);
  } else {
    // Reduz o número de tentativas restantes
    tentativasRestantes--;

    // Verifica se acabou as tentativas
    if (tentativasRestantes === 0) {
      document.getElementById(
        "resultado"
      ).innerText = `Você perdeu! O número era ${numeroSecreto}.`;
      document.getElementById("dica").innerText = "";
      document.getElementById("tentativas").innerText = "";
      document.querySelector("button").disabled = true;

      // Redireciona para a página principal após 2,5 segundos
      setTimeout(() => {
        window.location.href = "../../mainpg/index.html";
      }, 2500);
    } else {
      // Dá uma dica se o palpite foi maior ou menor
      if (chute > numeroSecreto) {
        document.getElementById("dica").innerText = "Dica: É menor!";
      } else {
        document.getElementById("dica").innerText = "Dica: É maior!";
      }
      // Atualiza o número de tentativas restantes
      document.getElementById(
        "tentativas"
      ).innerText = `Restam ${tentativasRestantes} tentativas`;
      document.getElementById("resultado").innerText = "";
    }
  }
}
