// Espera o carregamento da página
$( document ).ready(function() {

  // Busca na api https://randomuser.me por 10 usuário de forma aleatória 
  $.ajax({
    url: 'https://randomuser.me/api/?results=10',
    dataType: 'json',
    success: function(data) {

      let dados = data.results;

      // Iteração no array de dados recebidos
      for (var i = 0; i < dados.length; i++) {
        let src = dados[i].picture.large;
        let info = dados[i].name.first + " " + dados[i].name.last;
        // Carrega a source da imagem
        $("#img"+i).attr('src',src);
        // Carrega as informações do nome no tooltip da imagem
        $("#img"+i).attr('title', info);
      }
    }

  });
})
