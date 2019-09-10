
var etapa = 1;
var tiro = 0;
var resultado = 0;
var nombre;
var obj = {};
var arraytabla = [];

class Registro {
    constructor(nombre, puntaje) {
        this.nombre = nombre;
        this.puntaje = puntaje;
    }
}

function tirar() {
    let i = Math.round(Math.random() * (6 - 1) + 1);
    document.getElementById("dado1").src = "img/cara" + i + ".PNG";


    let j = Math.round(Math.random() * (6 - 1) + 1);
    document.getElementById("dado2").src = "img/cara" + j + ".PNG";

    resultado = i + j;
}



function primerTiro() {
    tirar();
    if(resultado == 7 || resultado == 11 ){
        alert("ganador");
        
    }else if(resultado == 2 || resultado == 3 || resultado == 12 ){
        alert("perdedor")
    }else{
        alert("comienza segunda etapa");
        etapa = 2;
        tiro = resultado;
    }
}

function segundaEtapa() {
    tirar();
    if(resultado == tiro ){
        alert("ganador")
        etapa = 1;
        
    }

    else if(resultado == 7 ){
        alert("perdedor")
    }

}

function jugar() {
    if(etapa == 1){
        primerTiro();
    }

    if(etapa == 2){
        segundaEtapa();
    }
    
}

function arrayadd(){
    arraytabla.push(new Registro(nombre,resultado));
}
