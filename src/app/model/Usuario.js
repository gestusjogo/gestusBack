class Usuario {
  constructor(nome, idade, data, multiplayer) {
    this._nome = nome;
    this._idade = idade;
    this._data = data;
    this._multiplayer = multiplayer;
  }

  get nome() {
    return this._nome;
  }

  get idade() {
    return this._idade;
  }

  get data() {
    return this._data;
  }

  get multiplayer() {
    return this._multiplayer;
  }

  set nome(nome) {
    this._nome = nome;
  }

  set idade(idade) {
    this._idade = idade;
  }

  set data(data) {
    this._data = data;
  }

  set multiplayer(multiplayer) {
    this._multiplayer = multiplayer;
  }
}

export default Usuario;
