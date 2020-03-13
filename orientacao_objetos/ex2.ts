class Carro{
    velocidadeMax: number;
    velocidadeAtual: number[];

    constructor(_velocidadeMax: number,_velocidadeAtual: number){
        this.velocidadeMax = _velocidadeMax;
        this.velocidadeAtual = [ _velocidadeAtual] 
    }

    acelerar(velocidadeMax: number, velocidadeAtual: number){
        for(this.velocidadeAtual;  velocidadeAtual <= velocidadeMax; velocidadeAtual++){
            console.log("Vel. Atual: " + this.velocidadeAtual + " Km/h")
        }
    }
}

let unoMille = new Carro(50,0)
    unoMille.acelerar(50,0)