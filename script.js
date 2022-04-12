function adicionarFilmeNaTela() {
  var endereçoDaImagem = document.getElementById("filme").value;
  if (endereçoDaImagem.endsWith(".jpg")) {
    listarFilmes(endereçoDaImagem);
  } else {
    console.error("Formato de imagem inválido");
  }

  function listarFilmes(filmes) {
    var elementoFilme = "<img src=" + filmes + ">";
    var listaFilmes = document.getElementById("listaFilmes");
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
  }

  document.getElementById("filme").value = "";
}