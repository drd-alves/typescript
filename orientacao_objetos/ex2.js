var Carro = /** @class */ (function () {
    function Carro(_velocidadeMax, _velocidadeAtual) {
        this.velocidadeMax = _velocidadeMax;
        this.velocidadeAtual = [_velocidadeAtual];
    }
    Carro.prototype.acelerar = function (velocidadeMax, velocidadeAtual) {
        for (this.velocidadeAtual; velocidadeAtual <= velocidadeMax; velocidadeAtual++) {
            console.log("Vel. Atual: " + this.velocidadeAtual + " Km/h");
        }
    };
    return Carro;
}());
var unoMille = new Carro(50, 0);
unoMille.acelerar(50, 0);
