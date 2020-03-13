//npm init
//npm i typescrpipt - express
// tsc.cmd --init
//tsc "nome do arquivo a ser transpilado"
//inicio da definição da classe 
var Cumprimento = /** @class */ (function () {
    //1-método constructor
    function Cumprimento(_nome, _idade) {
        if (_nome === void 0) { _nome = ""; }
        if (_idade === void 0) { _idade = ""; }
        this.nome = _nome;
        this.idade = _idade;
    }
    return Cumprimento;
}());
//----------------fim da definição da classe ---------------------
//invocando a função 
var pessoa1 = new Cumprimento(); // criaçã do objeto
var pessoa2 = new Cumprimento();
// console.log(pessoa1.mostrarNomeIdade("Silvia","56"))
// console.log(pessoa2.mostrarNomeIdade("Eduardo","19"))
