function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    

    //não mostra nenhum resultado se não pesquisar nada
    console.log(campoPesquisa)
    if (!campoPesquisa) {
      section.innerHTML = "<p>Escreva alguma coisa. Se quiser ver todos os resultados escreva !</p>"
      return
    }

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let img = "";
    let tags = "";
    let link = "";
    let imgClass = "";
    let resize
  
    // Itera sobre cada dado da lista de resultados
    for (let dado of dados) {
      campoPesquisa = campoPesquisa.toLowerCase()
      titulo = dado.titulo.toLowerCase()
      tags = dado.tags.toLowerCase()
      img = dado.img
      link = dado.link
      imgClass = dado.class
      resize = dado.resize
      if (titulo.includes(campoPesquisa) || img.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Cria um novo elemento
        resultados += `
        <div class="item-resultado">
                <h2>
                    <div>
                    <a href="${link}" target="_blank">
                      <div class= "${imgClass}">
                        <img src="${img}" class=${resize} alt="" >
                      </div>
                    </a>
                    </div>
                    <a href="${link}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descriçao-meta"></p>
                <a href="${link}" target="_blank">Click para ver inputs</a>
            </div>
      `;
      }
      console.log(dado.titulo.includes(campoPesquisa))
      
      
    }
  
    if (!resultados) {
      resultados = "<p>Nada foi encontrado :(</p>"

    }

    // Insere o HTML gerado na seção de resultados
    section.innerHTML = resultados;
}