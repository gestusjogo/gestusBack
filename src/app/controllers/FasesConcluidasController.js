import FasesConcluidas from "../model/FasesConcluidas.js";
import FasesConcluidasRepository from "../repositories/FasesConcluidasRepository.js";

class FasesConcluidasController {
  async create(request, response) {
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
      await FasesConcluidasRepository.create(fasesConcluidas);
      response.json({ message: "Success" });
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
