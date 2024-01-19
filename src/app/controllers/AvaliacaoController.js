import Avaliacao from "../model/Avaliacao.js";
import AvaliacaoRepository from "../repositories/AvaliacaoRepository.js";

class AvaliacaoController {
  async create(request, response) {
    try {
      const avaliacao = new Avaliacao(
        request.body.fase,
        request.body.nota,
        request.body.idUsuario
      );
      await AvaliacaoRepository.create(avaliacao);
      response.json({ message: "Success" });
    } catch (error) {
      response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async findAll(request, response) {
    try {
      const avaliacoes = await AvaliacaoRepository.findAll();
      response.json(avaliacoes);
    } catch (error) {
      response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async findById(request, response) {
    const id = request.params.id;
    try {
      const avaliacao = await AvaliacaoRepository.findById(id);
      if (!avaliacao) {
        response.json({ message: "ID not found" });
      } else {
        response.json(avaliacao);
      }
    } catch (error) {
      response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateById(request, response) {
    const id = request.params.id;
    try {
      const avaliacao = new Avaliacao(
        request.body.fase,
        request.body.nota,
        request.body.idUsuario
      );
      await AvaliacaoRepository.update(id, avaliacao);
      response.json({ message: "Success" });
    } catch (error) {
      response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteById(request, response) {
    const id = request.params.id;
    try {
      const exists = await AvaliacaoRepository.findById(id);
      if (!exists) {
        response.json({ message: "ID not found" });
      } else {
        await AvaliacaoRepository.delete(id);
        response.json({ message: "Success" });
      }
    } catch (error) {
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new AvaliacaoController();
