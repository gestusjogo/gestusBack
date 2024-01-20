import FasesConcluidas from "../model/FasesConcluidas.js";
import FasesConcluidasRepository from "../repositories/FasesConcluidasRepository.js";

class FasesConcluidasController {
  async inicio(request, response) {
    try {
      const idUsuario = request.body.id_usuario;
      const fasesConcluidas = new FasesConcluidas(idUsuario, true, false, false, false, false, false, false);
      const insertedId = await FasesConcluidasRepository.create(fasesConcluidas);
      response.json({ id: insertedId });
    } catch (error) {
      response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async atualizacao(request, response) {
    try {
      const idUsuario = request.body.id_usuario;
      const fase = request.body.fase;
      const fasesConcluidas = await FasesConcluidasRepository.findById(idUsuario);
      
      if (!fasesConcluidas) {
        response.status(404).json({ message: "Fases Concluidas not found" });
      } else {
        // Atualize a fase específica para '1' (concluída)
        fasesConcluidas[fase] = true;
        await FasesConcluidasRepository.update(idUsuario, fasesConcluidas);
        response.json({ message: "Success" });
      }
    } catch (error) {
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
  
  async findAll(request, response) {
    try {
      const fasesConcluidas = await FasesConcluidasRepository.findAll();
      response.json(fasesConcluidas);
    } catch (error) {
      response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async findById(request, response) {
    const id = request.params.id;
    try {
      const fasesConcluidas = await FasesConcluidasRepository.findById(id);
      if (!fasesConcluidas) {
        response.json({ message: "ID not found" });
      } else {
        response.json(fasesConcluidas);
      }
    } catch (error) {
      response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateById(request, response) {
    const id = request.params.id;
    try {
      const fasesConcluidas = new FasesConcluidas(
        request.body.idUsuario,
        request.body.inicio,
        request.body.fliperama,
        request.body.escola,
        request.body.supermercado,
        request.body.ambiental,
        request.body.sorveteria,
        request.body.praca
      );
      await FasesConcluidasRepository.update(id, fasesConcluidas);
      response.json({ message: "Success" });
    } catch (error) {
      response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteById(request, response) {
    const id = request.params.id;
    try {
      const exists = await FasesConcluidasRepository.findById(id);
      if (!exists) {
        response.json({ message: "ID not found" });
      } else {
        await FasesConcluidasRepository.delete(id);
        response.json({ message: "Success" });
      }
    } catch (error) {
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new FasesConcluidasController();
