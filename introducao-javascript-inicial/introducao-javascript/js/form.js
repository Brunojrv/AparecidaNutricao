var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){
event.preventDefault();


var form = document.querySelector("#form-adiciona");

var nome = form.nome.value;

var peso = form.peso.value;

var altura = form.altura.value;

var gordura = form.gordura.value;

var pacienteTr = document.createElement("tr");
var Nometd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");


Nometd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura ;
imcTd.textContent = calcImc(peso, altura);


pacienteTr.appendChild(Nometd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);



})

function validaPaciente(){
    
}