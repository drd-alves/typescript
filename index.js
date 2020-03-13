function Carro(_marca,_anoFabricacao,_velocidadeMaxima,_velocidadeAtual){
            
    this.marca = _marca
    this.anoFabricacao = _anoFabricacao
    this.velocidadeMaxima = _velocidadeMaxima
    this.velocidadeAtual=[ _velocidadeAtual] 
}

function acelerar(){

    Carro.prototype.acelera=function(){
    
        for(this.velocidadeAtual = 0; this.velocidadeAtual<=this.velocidadeMaxima; this.velocidadeAtual++){
            console.log("Vel. Atual: " + this.velocidadeAtual + " Km/h")
        }    
    }
    fiesta.acelera()
}

fiesta = new Carro("Ford", "2014", 50, "")