let nome: string = 'maria'

console.log(`bom dia ${nome}`)
console.log(typeof(nome))

//inferencia de tipo
let xx=2; // o ts  sabe o tipo da var, msm sem declara-lo
console.log(typeof(xx))
//xx = "silvia" ----> gera erro por ser type "number"
