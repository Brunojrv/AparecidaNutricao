
var pacientes = document.querySelectorAll(".paciente");


for(var i = 0; i < pacientes.length; i++){

var paciente = pacientes[i];

     
var tdPeso = paciente.querySelector(".info-peso"); /* paciente.querySeletor para poder selecionar os todos os pacientes e mudar em cada um */
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");


pesoEhValido = true;
alturaEhValida = true;

if(peso <= 0 || peso >= 1000){
 pesoEhValido = false;
 tdImc.textContent = "Peso Inválido";
 paciente.classList.add("paciente-invalido"); /*criando uma classList para alterar o CSS apenas uma vez, criando uma nova class e estilizando no js */
}

if(altura <= 0 || altura >= 3.00){
   alturaEhValida = false
   tdImc.textContent = ("Altura inválida")
   paciente.classList.add("paciente-invalido");
   
}

if(pesoEhValido && alturaEhValida){
   var imc =  calcImc(peso, altura)
   tdImc.textContent = imc; 
}
}

function calcImc(peso, altura){
 var imc = 0;

 imc = peso  / (altura * altura)

 return imc.toFixed(2); /* propriedade tofixed serve para limitar as casas decimais do código. */
}


