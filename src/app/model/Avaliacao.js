class Avaliacao {
    constructor(fase, nota, idUsuario) {
      this._fase = fase;
      this._nota = nota;
      this._idUsuario = idUsuario;
    }
  
    get fase() {
      return this._fase;
    }
  
    get nota() {
      return this._nota;
    }
  
    get idUsuario() {
      return this._idUsuario;
    }
  
    set fase(fase) {
      this._fase = fase;
    }
  
    set nota(nota) {
      this._nota = nota;
    }
  
    set idUsuario(idUsuario) {
      this._idUsuario = idUsuario;
    }
  }
  
  export default Avaliacao;
  