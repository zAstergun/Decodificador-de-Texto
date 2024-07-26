//Captura os elementos que vão ser manipulados
let inputDoUsuario = document.querySelector("#input");
let botaoCodificar = document.querySelector(".button_spell");
let botaoDecodificar = document.querySelector(".button_dispel");
let textoCodificado = document.querySelector(".magic_text");
let saidaDadosCopiar = document.querySelector(".data_output_copy");
let saidaDados = document.querySelector(".data_output_info");

//Função para criptografar o texto
botaoCodificar.addEventListener("click", () => {
  //Armazena o input do usuário na variável textoInformado
  let textoInformado = inputDoUsuario.value.toLowerCase();
  let arrayDoTextoInformado = textoInformado.split("");
  
  //Condicional verificando se existe algo no input, caso sim, ele faz a codificação, caso não, mostra um alerta na tela.
  if (textoInformado == "") {
    alert("Digite algo a ser criptografado!!");
  } else {
    for (let i = 0; i < arrayDoTextoInformado.length; i++) {
      switch (arrayDoTextoInformado[i]) {
        case "a":
          arrayDoTextoInformado[i] = "ai";
          break;
        case "e":
          arrayDoTextoInformado[i] = "enter";
          break;
        case "i":
          arrayDoTextoInformado[i] = "imes";
          break;
        case "o":
          arrayDoTextoInformado[i] = "ober";
          break;
        case "u":
          arrayDoTextoInformado[i] = "ufat";
          break;
      }
    }
  }
  
  //Atualiza a interface com o texto criptografado
  if (textoInformado != "") {
    textoCodificado.textContent = arrayDoTextoInformado.join("");
    textoCodificado.classList.add("active");
    saidaDados.classList.add("active");
    limparSaidaDeDados();
    saidaDadosCopiar.classList.add("active");
  }
});

//Função para decodificar o texto
botaoDecodificar.addEventListener("click", () => {
  let textoInformado = inputDoUsuario.value.toLowerCase();
  
  if (textoInformado == "") {
    alert("Nada a ser descriptografado!!");
  } else {
    let textoDecodificado = textoInformado
      .replaceAll("ai", "a")
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
      
    textoCodificado.textContent = textoDecodificado;
    inputDoUsuario.value = "";
    saidaDadosCopiar.textContent = "Copiar";
    saidaDadosCopiar.classList.remove("active2");
    limparSaidaDeDados();
    saidaDadosCopiar.classList.add("active");
  }
});

// Limpa parte dos elementos no container de saída de dados
function limparSaidaDeDados() {
  document.querySelector(".data_output_image").remove();
  saidaDados.remove();
}

// Função para copiar o texto criptografado
saidaDadosCopiar.addEventListener("click", () => {
  navigator.clipboard.writeText(textoCodificado.textContent);
  saidaDadosCopiar.textContent = "Copiado!";
  textoCodificado.textContent = "Cole ao lado e clique no botão estranheza para desfazer a magia";
});
  
// Recarrega a página ao clicar no logo da Alura
document.querySelector(".aurora_logo").addEventListener("click", () => {
  window.location.reload();
});
