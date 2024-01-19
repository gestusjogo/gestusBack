import connection from "../../config/database/connection.js";
import FasesConcluidas from "../model/FasesConcluidas.js";

class FasesConcluidasRepository {
  queryFasesConcluidas(sql, params = []) {
    return new Promise((resolve, reject) => {
      connection.query(sql, params, (error, result) => {
        if (error) {
          reject(error);
        } else {
          const rows = result.rows;
          const fasesConcluidas = rows.map((row) => {
            return new FasesConcluidas(
              row.idUsuario,
              row.inicio,
              row.fliperama,
              row.escola,
              row.supermercado,
              row.ambiental,
              row.sorveteria,
              row.praca
            );
          });
          resolve(fasesConcluidas);
        }
      });
    });
  }

  create(fasesConcluidas) {
    const sql = `
      INSERT INTO fases_concluidas
      (idUsuario, inicio, fliperama, escola, supermercado, ambiental, sorveteria, praca)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `;

    const values = [
      fasesConcluidas.idUsuario,
      fasesConcluidas.inicio,
      fasesConcluidas.fliperama,
      fasesConcluidas.escola,
      fasesConcluidas.supermercado,
      fasesConcluidas.ambiental,
      fasesConcluidas.sorveteria,
      fasesConcluidas.praca,
    ];

    return this.queryFasesConcluidas(sql, values);
  }

  findAll() {
    const sql = "SELECT * FROM fases_concluidas;";
    return this.queryFasesConcluidas(sql);
  }

  findById(id) {
    const sql = "SELECT * FROM fases_concluidas WHERE id = $1;";
    return this.queryFasesConcluidas(sql, [id]).then((fasesConcluidas) => {
      if (fasesConcluidas.length === 0) {
        return null;
      }
      return fasesConcluidas[0];
    });
  }

  update(id, fasesConcluidas) {
    const sql = `
      UPDATE fases_concluidas
      SET inicio=$1, fliperama=$2, escola=$3, supermercado=$4, ambiental=$5, sorveteria=$6, praca=$7
      WHERE id = $8
    `;

    const values = [
      fasesConcluidas.inicio,
      fasesConcluidas.fliperama,
      fasesConcluidas.escola,
      fasesConcluidas.supermercado,
      fasesConcluidas.ambiental,
      fasesConcluidas.sorveteria,
      fasesConcluidas.praca,
      id,
    ];

    return this.queryFasesConcluidas(sql, values);
  }

  delete(id) {
    const sql = "DELETE FROM fases_concluidas WHERE id = $1;";
    return this.queryFasesConcluidas(sql, [id]);
  }
}

export default new FasesConcluidasRepository();
