import connection from "../../config/database/connection.js";
import Usuario from "../model/Usuario.js"; // Importe o modelo de Usuario

class UsuarioRepository {
  queryUsuario(sql, params = "") {
    return new Promise((resolve, reject) => {
      connection.query(sql, params, (error, result) => {
        if (error) {
          const erro = {
            erro: "SQL - reject",
            message: error.message,
          };
          reject(erro);
        } else {
          const rows = result.rows;
          const usuario = rows.map((row) => {
            return new Usuario(
              row.nome,
              row.idade,
              row.data,
              row.multiplayer
            );
          });
          resolve(usuario);
        }
      });
    });
  }

  create(usuario) {
    const sql =
      "INSERT INTO usuario (nome, idade, data, multiplayer) VALUES ($1, $2, $3, $4) RETURNING *;";
    return this.queryUsuario(sql, [
      usuario.nome,
      usuario.idade,
      usuario.data,
      usuario.multiplayer,
    ]);
  }

  findAll() {
    const sql = "SELECT * FROM usuario ORDER BY id ASC;";
    return this.queryUsuario(sql);
  }

  findById(id) {
    const sql = "SELECT * FROM usuario WHERE id = $1;";
    return this.queryUsuario(sql, [id])
      .then((usuario) => {
        if (usuario.length === 0) {
          return null;
        }
        return usuario[0];
      });
  }

  update(id, usuario) {
    const sql =
      "UPDATE usuario SET nome=$1, idade=$2, data=$3, multiplayer=$4 WHERE id = $5;";
    return this.queryUsuario(sql, [
      usuario.nome,
      usuario.idade,
      usuario.data,
      usuario.multiplayer,
      id,
    ]);
  }

  delete(id) {
    const sql = "DELETE FROM usuario WHERE id = $1;";
    return this.queryUsuario(sql, [id]);
  }
}

export default new UsuarioRepository();
