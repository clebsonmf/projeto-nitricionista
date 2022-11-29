var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event){

    event.target.parentNode.classList.add("fadeOut");
    setTimeout(() => {
        event.target.parentNode.remove();
    },500);
    
});
























// o parentNode indica que a ação vai ser executada no pai do elemento anterior,
//no caso, o event.target
//event.target é para passar o evento naquele que foi clicado

/**
 var pacientes = document.querySelectorAll(".paciente"); 

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        this.remove();
    }); 
}); 
//se eu fizesse assim, ia ter que colocar um evento
para cada elemento tr criado. Fazendo da maneira acima, 
eucoloco o evento do elento pai das tr's (table)e
automaticamente, o evento se replicara em todos seus filhos.
 */
