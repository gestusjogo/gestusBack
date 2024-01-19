import Usuario from "../model/Usuario.js";
import UsuarioRepository from "../repositories/UsuarioRepository.js";

class UsuarioController {
  async findAll(request, response) {
    try {
      const result = await UsuarioRepository.findAll();
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  }

  async findById(request, response) {
    const id = request.params.id;
    try {
      const result = await UsuarioRepository.findById(id);
      if (!result) {
        response.json({ message: "ID not found" });
      } else {
        response.json(result);
      }
    } catch (error) {
      response.json(error);
    }
  }

  async createSingle(request, response) {
    try {
      const nome = request.body.nome;
      const idade = request.body.idade;
      const multiplayer = false;

      const usuario = new Usuario(nome, new Date(), idade, multiplayer);
      const insertedId = await UsuarioRepository.create(usuario);
      
      response.json({ id: insertedId });
    } catch (error) {
      response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createMulti(request, response) {
    try {
      const nome1 = request.body.nome1;
      const idade1 = request.body.idade1;
      const nome2 = request.body.nome2;
      const idade2 = request.body.idade2;
      const multiplayer = true;

      const usuario1 = new Usuario(nome1, new Date(), idade1, multiplayer);
      const insertedId1 = await UsuarioRepository.create(usuario1);

      const usuario2 = new Usuario(nome2, new Date(), idade2, multiplayer);
      const insertedId2 = await UsuarioRepository.create(usuario2);

      response.json({ id1: insertedId1, id2: insertedId2 });
    } catch (error) {
      response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateById(request, response) {
    const id = request.params.id;
    try {
      const exists = await UsuarioRepository.findById(id);
      if (!exists) {
        response.json({ message: "ID not found" });
      } else {
        try {
          const usuario = new Usuario(
            request.body.nome,
            request.body.idade,
            request.body.data,
            request.body.multiplayer
          );
          await UsuarioRepository.update(id, usuario);
          response.json({ message: "Success" });
        } catch (error) {
          response.json(error);
        }
      }
    } catch (error) {
      response.json(error);
    }
  }

  async deleteById(request, response) {
    const id = request.params.id;
    try {
      const exists = await UsuarioRepository.findById(id);
      if (!exists) {
        response.json({ message: "ID not found" });
      } else {
        await UsuarioRepository.delete(id);
        response.json({ message: "Success" });
      }
    } catch (error) {
      response.json(error);
    }
  }
}

export default new UsuarioController();
