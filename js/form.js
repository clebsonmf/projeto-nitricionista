var botaoAdicionarPaciente = document.querySelector("#adicionar-paciente");
botaoAdicionarPaciente.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemDadosPaciente(form);

    var erros = validaPaciente(paciente);
    if(erros.length > 0){
        exibeMensagemDeErro(erros);
       
        return; // aqui dou esse return vazio pois se a validação do paciente nao for aprovada, o loop vai sair da função sem montar o tr e td
    }

    adicionaPacienteNaTabela(paciente);

    form.reset(); // o reset e para limpar os campos do form apos clicar no botao enviar.
    var mensagemErro = document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML = ""; 
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
   
    tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; // o inner controla os filhos de quem eu passar (no caso aqui, ul). assim ele vai limpar oa erros exibidos dentro de ul quando recarregar a pagina pois eu disse que ul.inner = "".
    
    erros.forEach((erro) => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemDadosPaciente(form){
    var paciente = {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc:calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");//o tr passado para criateElement é pq eu devo passar como parametro aquilo que eu quero criar.
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    var erros = [];
    if(!validaPeso(paciente.peso)) erros.push("O peso é inválido");// posso remover as chaves aqui do if pq ele e simples (nao tem else), e so tem uma linha de comando e nao um bloco de codigo.
    if(!validaAltura(paciente.altura)) erros.push("A altura é inválida");
    
    if(paciente.nome.length == 0) erros.push("O nome do paciente nao pode ser vazio");
    if(paciente.peso.length == 0) erros.push("O peso do paciente nao pode ser vazio");
    if(paciente.altura.length == 0) erros.push("A altura do paciente nao pode ser vazia");
    if(paciente.gordura.length == 0) erros.push("A gordura do paciente nao pode ser vazia");

    return erros;
}