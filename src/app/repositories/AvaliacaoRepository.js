import connection from "../../config/database/connection.js";
import Avaliacao from "../models/Avaliacao.js";

class AvaliacaoRepository {
  queryAvaliacao(sql, params = []) {
    return new Promise((resolve, reject) => {
      connection.query(sql, params, (error, result) => {
        if (error) {
          reject(error);
        } else {
          const rows = result.rows;
          const avaliacoes = rows.map((row) => {
            return new Avaliacao(row.fase, row.nota, row.idUsuario);
          });
          resolve(avaliacoes);
        }
      });
    });
  }

  create(avaliacao) {
    const sql = `
      INSERT INTO avaliacao
      (fase, nota, idUsuario)
      VALUES ($1, $2, $3)
    `;

    const values = [avaliacao.fase, avaliacao.nota, avaliacao.idUsuario];

    return this.queryAvaliacao(sql, values);
  }

  findAll() {
    const sql = "SELECT * FROM avaliacao;";
    return this.queryAvaliacao(sql);
  }

  findById(id) {
    const sql = "SELECT * FROM avaliacao WHERE id = $1;";
    return this.queryAvaliacao(sql, [id]).then((avaliacoes) => {
      if (avaliacoes.length === 0) {
        return null;
      }
      return avaliacoes[0];
    });
  }

  update(id, avaliacao) {
    const sql = `
      UPDATE avaliacao
      SET fase=$1, nota=$2, idUsuario=$3
      WHERE id = $4
    `;

    const values = [avaliacao.fase, avaliacao.nota, avaliacao.idUsuario, id];

    return this.queryAvaliacao(sql, values);
  }

  delete(id) {
    const sql = "DELETE FROM avaliacao WHERE id = $1;";
    return this.queryAvaliacao(sql, [id]);
  }
}

export default new AvaliacaoRepository();
