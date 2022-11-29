var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});

//responsavel por fazer requisições http.
// open abre a conexao com o endereço que a gente quer fazer.
// primeiro a gente explica que tipo de requisição queremos fazer (put, get, delete etc). no caso foi GET, e em seguidas passamos o endereço (link) de onde queremos pegar os dados.
// evento load é executado ao carregar a pagina
// o response.text traz o texto da resposta. geralmente ele vem com o typeof string.
// o send envia a requisição.