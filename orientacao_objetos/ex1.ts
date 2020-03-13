//npm init
//npm i typescrpipt - express
// tsc.cmd --init

//tsc "nome do arquivo a ser transpilado"

//inicio da definição da classe 
class Cumprimento{
    //atributos
    nome:string;
    idade:string

    //1-método constructor
    constructor(_nome: string = "",_idade: string = ""){
        this.nome = _nome;
        this.idade = _idade;
    }
}
//----------------fim da definição da classe ---------------------


//invocando a função 
let pessoa1 = new Cumprimento() // criaçã do objeto
let pessoa2 = new Cumprimento()

// console.log(pessoa1.mostrarNomeIdade("Silvia","56"))
// console.log(pessoa2.mostrarNomeIdade("Eduardo","19"))

console.log()

