var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var subtitulo = document.querySelector(".subtitulo");
subtitulo.textContent = "Pacientes";

var pacientes = document.querySelectorAll(".paciente");


for(var i=0; i<pacientes.length; i++){
    paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEValido = validaPeso(peso);
    var alturaEValida = validaAltura(altura);

    if(!pesoEValido){
    console.log("Peso inválido");
    pesoEValido = false;
    tdImc.textContent = "Peso Inválido";
    paciente.classList.add("dados-invalidos");// essa é melhor forma de manipular estilos no js.
    //classList me retorna todas as classes do objeto. No caso acima, as classes do objeto paciente.
    //paciente.style.backgroundColor = "orangered"; essa é uma forma de adicionar cor ao arquivo diretamente no js, 
    //mas o ideal e que seja adcionado no css adicionando no js apenas uma classlist como no exemplo acima;
}
    if(!alturaEValida){
    console.log("Altura inválida");
    alturaEValida = false;
    tdImc.textContent = "Altura Inválida";
    paciente.classList.add("dados-invalidos");
}

    if(alturaEValida && pesoEValido){
    var imc = calculaImc (peso, altura);
    tdImc.textContent = imc;
    }
}

function calculaImc (peso, altura){
    var imc = 0;
    imc = peso / (altura*altura);

    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >= 0 && peso<1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura < 3){
        return true;
    }else{
        false
    }
}
    










