class FasesConcluidas {
    constructor(idUsuario, inicio = false, fliperama = false, escola = false, supermercado = false, ambiental = false, sorveteria = false, praca = false) {
      this._idUsuario = idUsuario;
      this._inicio = inicio;
      this._fliperama = fliperama;
      this._escola = escola;
      this._supermercado = supermercado;
      this._ambiental = ambiental;
      this._sorveteria = sorveteria;
      this._praca = praca;
    }
  
    get idUsuario() {
      return this._idUsuario;
    }
  
    get inicio() {
      return this._inicio;
    }
  
    get fliperama() {
      return this._fliperama;
    }
  
    get escola() {
      return this._escola;
    }
  
    get supermercado() {
      return this._supermercado;
    }
  
    get ambiental() {
      return this._ambiental;
    }
  
    get sorveteria() {
      return this._sorveteria;
    }
  
    get praca() {
      return this._praca;
    }
  
    set inicio(inicio) {
      this._inicio = inicio;
    }
  
    set fliperama(fliperama) {
      this._fliperama = fliperama;
    }
  
    set escola(escola) {
      this._escola = escola;
    }
  
    set supermercado(supermercado) {
      this._supermercado = supermercado;
    }
  
    set ambiental(ambiental) {
      this._ambiental = ambiental;
    }
  
    set sorveteria(sorveteria) {
      this._sorveteria = sorveteria;
    }
  
    set praca(praca) {
      this._praca = praca;
    }
  }
  
  export default FasesConcluidas;
  